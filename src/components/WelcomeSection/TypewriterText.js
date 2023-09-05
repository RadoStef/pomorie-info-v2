import { useState, useEffect } from "react";

export const TypewriterText = ({ text, delay = 50, repeat = true, repeatDelay = 15000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (currentIndex === text.length) {
      if (repeat) {
        const timer = setTimeout(() => {
          setCurrentIndex(0);
        }, repeatDelay);
        return () => {
          clearTimeout(timer);
        };
      }
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, delay, repeat, repeatDelay, text.length]);

  useEffect(() => {
    setDisplayText(text.substring(0, currentIndex));
  }, [currentIndex, text]);

  return <div><span>{displayText}</span></div>;
};