import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    if (isTouchDevice()) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!mounted || isTouchDevice()) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        boxShadow: "0 0 16px 6px rgba(124, 58, 237, 0.6), 0 0 32px 10px rgba(6, 182, 212, 0.4)",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.95) 0%, rgba(6, 182, 212, 0.7) 100%)",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}
