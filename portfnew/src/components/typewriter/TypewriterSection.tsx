import React, { useState } from 'react';
import TypingAnimation from './TypingAnimation';

const TypewriterSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showNextText, setShowNextText] = useState(false);

  const texts = [
    "Welcome to the future of web design",
    "Where every word tells a story",
    "And every letter creates magic",
    "Experience the power of typography"
  ];

  const handleComplete = () => {
    if (currentTextIndex < texts.length - 1) {
      setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
        setShowNextText(true);
      }, 1000);
    }
  };

  return (
    <div className="space-y-4">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            index <= currentTextIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {index === currentTextIndex ? (
            <TypingAnimation
              text={text}
              speed={80}
              delay={index === 0 ? 500 : 0}
              className="text-lg md:text-xl font-medium text-gray-800"
              onComplete={handleComplete}
            />
          ) : index < currentTextIndex ? (
            <span className="text-lg md:text-xl font-medium text-gray-800">
              {text}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TypewriterSection;