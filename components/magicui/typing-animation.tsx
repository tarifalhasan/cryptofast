"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        // Reset to repeat typing
        setI(0);
        setDisplayedText("");
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <h1
      className={cn(" font-bold  tracking-[-0.02em] drop-shadow-sm", className)}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
