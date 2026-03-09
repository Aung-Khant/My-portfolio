import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl glass border border-white/10 text-primary hover:border-violet-500/30 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: isDark ? 0 : 180,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.span
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -180,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.span>
      <motion.span
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 180 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.span>
    </motion.button>
  );
}
