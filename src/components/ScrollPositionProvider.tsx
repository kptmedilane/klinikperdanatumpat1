import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollContextType {
  saveCurrentPosition: () => void;
  restorePosition: (key: string) => void;
  clearAllPositions: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollPositionProvider');
  }
  return context;
};

interface ScrollPositionProviderProps {
  children: React.ReactNode;
}

export const ScrollPositionProvider: React.FC<ScrollPositionProviderProps> = ({ children }) => {
  const location = useLocation();
  const scrollPositions = useRef<Map<string, { x: number; y: number; timestamp: number }>>(new Map());
  const isRestoringRef = useRef(false);

  const getLocationKey = () => {
    return `${location.pathname}${location.search}`;
  };

  const saveCurrentPosition = () => {
    if (isRestoringRef.current) return;
    
    const key = getLocationKey();
    scrollPositions.current.set(key, {
      x: window.scrollX,
      y: window.scrollY,
      timestamp: Date.now()
    });
  };

  const restorePosition = (key: string) => {
    const position = scrollPositions.current.get(key);
    if (position) {
      isRestoringRef.current = true;
      
      requestAnimationFrame(() => {
        window.scrollTo({
          left: position.x,
          top: position.y,
          behavior: 'auto'
        });
        
        setTimeout(() => {
          isRestoringRef.current = false;
        }, 100);
      });
    }
  };

  const clearAllPositions = () => {
    scrollPositions.current.clear();
  };

  // Clean up old positions (older than 30 minutes)
  useEffect(() => {
    const cleanup = () => {
      const now = Date.now();
      const maxAge = 30 * 60 * 1000; // 30 minutes
      
      for (const [key, position] of scrollPositions.current.entries()) {
        if (now - position.timestamp > maxAge) {
          scrollPositions.current.delete(key);
        }
      }
    };

    const interval = setInterval(cleanup, 5 * 60 * 1000); // Clean up every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const contextValue: ScrollContextType = {
    saveCurrentPosition,
    restorePosition,
    clearAllPositions
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};