import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface ScrollPosition {
  x: number;
  y: number;
  timestamp: number;
}

interface ScrollPositions {
  [key: string]: ScrollPosition;
}

class ScrollPositionManager {
  private static instance: ScrollPositionManager;
  private positions: ScrollPositions = {};
  private readonly STORAGE_KEY = 'scroll_positions';
  private readonly MAX_AGE = 30 * 60 * 1000; // 30 minutes

  static getInstance(): ScrollPositionManager {
    if (!ScrollPositionManager.instance) {
      ScrollPositionManager.instance = new ScrollPositionManager();
    }
    return ScrollPositionManager.instance;
  }

  constructor() {
    this.loadFromStorage();
    this.cleanupOldPositions();
    this.initializeScrollRestoration();
  }

  private initializeScrollRestoration(): void {
    // Set manual scroll restoration to prevent browser's default behavior
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }

  private loadFromStorage(): void {
    try {
      const stored = sessionStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.positions = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load scroll positions from storage:', error);
      this.positions = {};
    }
  }

  private saveToStorage(): void {
    try {
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.positions));
    } catch (error) {
      console.warn('Failed to save scroll positions to storage:', error);
    }
  }

  private cleanupOldPositions(): void {
    const now = Date.now();
    const cleaned: ScrollPositions = {};
    
    Object.entries(this.positions).forEach(([key, position]) => {
      if (now - position.timestamp < this.MAX_AGE) {
        cleaned[key] = position;
      }
    });
    
    this.positions = cleaned;
    this.saveToStorage();
  }

  savePosition(key: string, x: number = window.scrollX, y: number = window.scrollY): void {
    this.positions[key] = {
      x,
      y,
      timestamp: Date.now()
    };
    this.saveToStorage();
  }

  getPosition(key: string): ScrollPosition | null {
    const position = this.positions[key];
    if (!position) return null;
    
    // Check if position is still valid (not too old)
    if (Date.now() - position.timestamp > this.MAX_AGE) {
      delete this.positions[key];
      this.saveToStorage();
      return null;
    }
    
    return position;
  }

  removePosition(key: string): void {
    delete this.positions[key];
    this.saveToStorage();
  }

  clear(): void {
    this.positions = {};
    sessionStorage.removeItem(this.STORAGE_KEY);
  }
}

export const useScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollManager = useRef(ScrollPositionManager.getInstance());
  const isRestoringRef = useRef(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout>();
  const lastLocationRef = useRef<string>('');

  // Generate a unique key for the current location
  const getLocationKey = () => {
    return `${location.pathname}${location.search}`;
  };

  // Save current scroll position with debouncing
  const saveScrollPosition = () => {
    if (isRestoringRef.current) return;
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    saveTimeoutRef.current = setTimeout(() => {
      const key = lastLocationRef.current || getLocationKey();
      scrollManager.current.savePosition(key);
    }, 100);
  };

  // Restore scroll position for current location
  const restoreScrollPosition = () => {
    const key = getLocationKey();
    const position = scrollManager.current.getPosition(key);
    
    if (position) {
      isRestoringRef.current = true;
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            window.scrollTo({
              left: position.x,
              top: position.y,
              behavior: 'auto' // Use 'auto' for instant restoration
            });
            
            // Reset the flag after a short delay
            setTimeout(() => {
              isRestoringRef.current = false;
            }, 100);
          } catch (error) {
            console.warn('Failed to restore scroll position:', error);
            isRestoringRef.current = false;
          }
        });
      });
      
      return true; // Position was restored
    }
    
    return false; // No position to restore
  };

  // Scroll to top for new navigations
  const scrollToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'auto'
    });
  };

  // Handle hash navigation
  const handleHashNavigation = () => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return true;
    }
    return false;
  };

  // Main navigation effect
  useEffect(() => {
    const currentLocationKey = getLocationKey();
    
    // Save the previous location's scroll position before navigating
    if (lastLocationRef.current && lastLocationRef.current !== currentLocationKey) {
      scrollManager.current.savePosition(lastLocationRef.current);
    }

    // Determine navigation behavior based on navigation type
    if (navigationType === 'POP') {
      // Back/forward navigation - restore scroll position
      const restored = restoreScrollPosition();
      if (!restored) {
        // If no saved position, handle hash or scroll to top
        if (!handleHashNavigation()) {
          scrollToTop();
        }
      }
    } else {
      // New navigation (PUSH/REPLACE) - handle hash or scroll to top
      if (!handleHashNavigation()) {
        scrollToTop();
      }
    }

    // Update the last location reference
    lastLocationRef.current = currentLocationKey;
  }, [location, navigationType]);

  // Save scroll position on scroll events
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          saveScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save position before page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const key = getLocationKey();
      scrollManager.current.savePosition(key);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Handle browser back/forward button events
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // This will be handled by the main navigation effect above
      // but we can add additional logic here if needed
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  return {
    saveScrollPosition: () => saveScrollPosition(),
    restoreScrollPosition: () => restoreScrollPosition(),
    clearScrollPositions: () => scrollManager.current.clear()
  };
};