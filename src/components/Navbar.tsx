import { motion } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const scrollDirection = useScrollDirection(60);
  const isHidden = scrollDirection === "down";

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-subtle bg-bg/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isHidden ? -120 : 0,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:h-16 md:px-6">
        <a
          href="#hero"
          className="text-sm font-medium tracking-tight text-primary md:text-[0.9375rem]"
        >
          Jonathan Aung
        </a>

        <div className="flex items-center gap-5 md:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-quiet hidden text-sm sm:block"
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
