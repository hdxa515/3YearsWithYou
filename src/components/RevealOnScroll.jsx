
import React from 'react';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ children, className }) => {
  const [ref, inView] = useInView({
  //  triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 50% of the element is visible
   // rootMargin: '0px 0px -100px 0px', // Adds a 100px margin at the bottom of the viewport
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 delay-400 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
