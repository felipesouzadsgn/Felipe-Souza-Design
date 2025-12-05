import React, { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  // Temporarily disabled animation to ensure visibility
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Reveal;
