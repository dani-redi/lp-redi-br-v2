import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = '', 
  stagger = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start slightly before element comes into view
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`scroll-section ${isVisible ? 'visible' : ''} ${className}`}
      style={stagger > 0 ? { transitionDelay: `${stagger * 100}ms` } : undefined}
    >
      {children}
    </div>
  );
};
