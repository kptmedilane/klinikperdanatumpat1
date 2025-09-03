/**
 * Utility functions for scroll position management
 */

export interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Get current scroll position
 */
export const getCurrentScrollPosition = (): ScrollPosition => ({
  x: window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || 0,
  y: window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
});

/**
 * Scroll to position with options
 */
export const scrollToPosition = (
  position: ScrollPosition,
  behavior: ScrollBehavior = 'auto'
): void => {
  try {
    window.scrollTo({
      left: position.x,
      top: position.y,
      behavior
    });
  } catch (error) {
    // Fallback for older browsers
    window.scrollTo(position.x, position.y);
  }
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (
  element: Element | string,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
): void => {
  const targetElement = typeof element === 'string' 
    ? document.querySelector(element)
    : element;
    
  if (targetElement) {
    targetElement.scrollIntoView(options);
  }
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Get scroll percentage of page
 */
export const getScrollPercentage = (): number => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

/**
 * Check if user can scroll (content is scrollable)
 */
export const isScrollable = (): boolean => {
  return document.documentElement.scrollHeight > window.innerHeight;
};

/**
 * Restore scroll position with retry mechanism
 */
export const restoreScrollPositionWithRetry = (
  position: ScrollPosition,
  maxRetries: number = 3,
  delay: number = 100
): Promise<void> => {
  return new Promise((resolve) => {
    let attempts = 0;
    
    const attemptRestore = () => {
      scrollToPosition(position, 'auto');
      
      // Check if scroll position was actually set
      setTimeout(() => {
        const current = getCurrentScrollPosition();
        const tolerance = 5; // Allow small differences
        
        if (
          Math.abs(current.x - position.x) <= tolerance &&
          Math.abs(current.y - position.y) <= tolerance
        ) {
          resolve();
        } else if (attempts < maxRetries) {
          attempts++;
          setTimeout(attemptRestore, delay);
        } else {
          // Give up after max retries
          resolve();
        }
      }, 50);
    };
    
    attemptRestore();
  });
};