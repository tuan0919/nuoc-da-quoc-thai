import { useState, useRef } from "react";

export function useLongPress(callback: () => void, ms = 500) {
  const [pressing, setPressing] = useState(false);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    setPressing(true);
    timerRef.current = window.setTimeout(() => {
      callback();
      setPressing(false);
    }, ms);
  };

  const stop = () => {
    setPressing(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return {
    onMouseDown: start,
    onTouchStart: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchEnd: stop,
  };
}
