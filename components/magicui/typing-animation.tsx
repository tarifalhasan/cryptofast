"use client";

import React, { useEffect, useState } from "react";

type TypingTextProps = {
  text: string[];
  typingSpeed?: number;
  delayBetweenLines?: number;
  className?: string;
  repeatDelay?: number; // Delay before repeating the whole animation
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100,
  delayBetweenLines = 1000,
  className,
  repeatDelay = 2000, // 2 seconds delay before restarting
}) => {
  const [displayedText, setDisplayedText] = useState<string[]>(["", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (currentLine >= text.length) {
      // When finished typing all lines, reset to start again after the delay
      const repeatTimeout = setTimeout(() => {
        setDisplayedText(["", ""]);
        setVisibleLetters([0, 0]);
        setCurrentLine(0);
      }, repeatDelay);
      return () => clearTimeout(repeatTimeout);
    }

    const currentText = text[currentLine];
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[currentLine] = currentText.slice(0, index + 1);
        return newText;
      });
      setVisibleLetters((prev) => {
        const newVisible = [...prev];
        newVisible[currentLine] = index + 1;
        return newVisible;
      });

      index += 1;

      if (index === currentText.length) {
        clearInterval(interval);
        setTimeout(() => setCurrentLine((prev) => prev + 1), delayBetweenLines);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentLine, text, typingSpeed, delayBetweenLines, repeatDelay]);

  const renderTextWithAnimation = (lineText: string, visibleCount: number) => {
    return (
      <>
        {lineText.split("").map((char, i) => (
          <span
            key={i}
            className={`typing-letter ${i < visibleCount ? "visible" : ""}`}
          >
            {char}
          </span>
        ))}
      </>
    );
  };

  return (
    <p className={`${className} typing-text`}>
      {renderTextWithAnimation(displayedText[0], visibleLetters[0])}
      <br />
      {renderTextWithAnimation(displayedText[1], visibleLetters[1])}
    </p>
  );
};

export default TypingText;
