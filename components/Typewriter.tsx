import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  infinite?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  delay = 150, 
  infinite = true,
  className = ""
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 4000); // Wait 4 seconds before deleting
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, 50); // Delete fast
      } else {
        setIsDeleting(false);
      }
      return () => clearTimeout(timer);
    }

    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    } else if (infinite) {
      setIsPaused(true);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, delay, infinite, isDeleting, isPaused, text]);

  return (
    <span className={`${className} inline-flex items-center`}>
      {currentText}
      <span className="w-[2px] h-[1.2em] bg-current ml-1 animate-pulse"></span>
    </span>
  );
};

export default Typewriter;