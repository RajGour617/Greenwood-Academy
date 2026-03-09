import React from 'react';
import { useInView } from '../hooks/useInView';

// Wrapper component that fades/raises content into view as the user scrolls
// It automatically disconnects the observer after the element has been shown.
const Reveal = ({ children, className = '', ...props }) => {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform opacity-0 translate-y-6 ${
        visible ? 'opacity-100 translate-y-0' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
