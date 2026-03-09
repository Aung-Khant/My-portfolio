import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | null;

export function useScrollDirection(threshold = 80): Direction {
  const [direction, setDirection] = useState<Direction>(null);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > threshold) {
            setDirection(y > lastY.current ? "down" : "up");
          } else {
            setDirection(null);
          }
          lastY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return direction;
}
