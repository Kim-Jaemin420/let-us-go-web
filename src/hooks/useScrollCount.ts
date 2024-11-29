import { useRef, useEffect, useState, useCallback } from "react";

interface UseScrollCountParams {
  end: number;
  start?: number;
  duration?: number;
}

const useScrollCount = ({ end, start = 0, duration = 3000 }: UseScrollCountParams) => {
  const dom = useRef<HTMLElement | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const totalIncrement = end - start;
  const interval = 5;
  const totalSteps = duration / interval;
  const incrementPerStep = totalIncrement / totalSteps;

  const updateNumber = useCallback(() => {
    if (animationStarted) return;

    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber += incrementPerStep;
      if (currentNumber >= end) {
        clearInterval(counter);
        currentNumber = end;
      }

      if (dom.current) {
        dom.current.textContent = Math.floor(currentNumber).toString();
      }
    }, interval);

    setAnimationStarted(true);
  }, [end, start, incrementPerStep, interval, animationStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          updateNumber();
        }
      },
      { threshold: 0.7 },
    );

    if (dom.current) {
      observer.observe(dom.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [updateNumber]);

  return { ref: dom };
};

export default useScrollCount;
