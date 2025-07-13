import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  hideCursorAfterComplete?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursorClassName = '',
  onComplete,
  hideCursorAfterComplete = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (hideCursorAfterComplete) {
        setTimeout(() => setShowCursor(false), 500); // Small delay before hiding cursor
      }
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete, hideCursorAfterComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && (
        <span 
          className={`inline-block w-0.3 h-4 bg-current ml-1 animate-blink ${cursorClassName}`}
          style={{ animationDuration: '0.7s' }}
        />
      )}
    </span>
  );
};

export default TypingAnimation;