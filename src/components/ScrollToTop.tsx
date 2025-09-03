import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only handle scroll behavior for non-popstate navigations
    // Popstate (back/forward) navigation is handled by useScrollRestoration
    if (navigationType !== 'POP') {
      // Check if there's a hash in the URL
      if (location.hash) {
        // Small delay to ensure the target element exists
        setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // For new page navigation without hash, scroll to top
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto'
        });
      }
    }
  }, [location, navigationType]);

  return null;
};

export default ScrollToTop;