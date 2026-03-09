import { motion } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#resume", label: "Resume" },
];

export function Navbar() {
  const scrollDirection = useScrollDirection(60);
  const isHidden = scrollDirection === "down";

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isHidden ? -120 : 0,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="font-heading text-xl font-bold tracking-tight gradient-text md:text-2xl"
        >
          AMK
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-primary hidden text-sm font-medium transition-colors sm:block"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
