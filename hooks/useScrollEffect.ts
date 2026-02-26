import { useEffect, useState } from 'react';

export const useScrollEffect = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Mark as scrolled once user scrolls down at least 50px
      if (currentScrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set a small timeout to prevent rapid firing
      scrollTimeout = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [hasScrolled]);

  return { hasScrolled, scrollY };
};
