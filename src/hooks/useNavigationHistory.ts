import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface NavigationEntry {
  pathname: string;
  search: string;
  hash: string;
  timestamp: number;
  scrollPosition: { x: number; y: number };
}

export const useNavigationHistory = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const historyRef = useRef<NavigationEntry[]>([]);
  const currentIndexRef = useRef(-1);

  const getCurrentEntry = (): NavigationEntry => ({
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    timestamp: Date.now(),
    scrollPosition: { x: window.scrollX, y: window.scrollY }
  });

  const addEntry = (entry: NavigationEntry) => {
    // Remove any entries after current index (for new navigation)
    historyRef.current = historyRef.current.slice(0, currentIndexRef.current + 1);
    
    // Add new entry
    historyRef.current.push(entry);
    currentIndexRef.current = historyRef.current.length - 1;
    
    // Keep only last 50 entries to prevent memory issues
    if (historyRef.current.length > 50) {
      historyRef.current = historyRef.current.slice(-50);
      currentIndexRef.current = historyRef.current.length - 1;
    }
  };

  const updateCurrentEntry = () => {
    if (currentIndexRef.current >= 0 && currentIndexRef.current < historyRef.current.length) {
      historyRef.current[currentIndexRef.current] = getCurrentEntry();
    }
  };

  const getPreviousEntry = (): NavigationEntry | null => {
    const prevIndex = currentIndexRef.current - 1;
    return prevIndex >= 0 ? historyRef.current[prevIndex] : null;
  };

  const getNextEntry = (): NavigationEntry | null => {
    const nextIndex = currentIndexRef.current + 1;
    return nextIndex < historyRef.current.length ? historyRef.current[nextIndex] : null;
  };

  useEffect(() => {
    if (navigationType === 'PUSH') {
      // New navigation - add entry
      addEntry(getCurrentEntry());
    } else if (navigationType === 'POP') {
      // Back/forward navigation - update current index
      const currentLocation = `${location.pathname}${location.search}${location.hash}`;
      const foundIndex = historyRef.current.findIndex(entry => 
        `${entry.pathname}${entry.search}${entry.hash}` === currentLocation
      );
      
      if (foundIndex !== -1) {
        currentIndexRef.current = foundIndex;
      }
    } else if (navigationType === 'REPLACE') {
      // Replace current entry
      if (currentIndexRef.current >= 0) {
        historyRef.current[currentIndexRef.current] = getCurrentEntry();
      } else {
        addEntry(getCurrentEntry());
      }
    }
  }, [location, navigationType]);

  // Update scroll position of current entry on scroll
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateCurrentEntry();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return {
    currentEntry: historyRef.current[currentIndexRef.current] || null,
    previousEntry: getPreviousEntry(),
    nextEntry: getNextEntry(),
    history: historyRef.current,
    currentIndex: currentIndexRef.current
  };
};