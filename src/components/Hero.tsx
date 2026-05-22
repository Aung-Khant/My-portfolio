import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const socialLinks = [
  { href: "https://github.com/Aung-Khant", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/real-aungminkhant/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:aung.m.khant22@gmail.com", icon: Mail, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 md:px-6"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-2xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-semibold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.25rem]"
        >
          Aung Min Khant
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary group">
            View work
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="link-quiet"
            >
              <Icon className="h-[1.125rem] w-[1.125rem]" />
            </a>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-col items-center gap-1.5 md:mt-20">
          <a
            href="#projects"
            className="link-quiet flex flex-col items-center gap-1"
            aria-label="Scroll to projects"
          >
            <span className="text-xs tracking-wide uppercase">Projects</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
