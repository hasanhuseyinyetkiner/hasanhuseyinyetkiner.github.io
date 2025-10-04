
import React, { useRef, ReactNode } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, '-100px');

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 min-h-[50vh] transition-all duration-1000 transform ${onScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
