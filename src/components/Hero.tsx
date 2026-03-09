import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-6"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-4 font-sans text-sm font-medium uppercase tracking-widest text-muted md:text-base"
        >
          Welcome to my portfolio
        </motion.p>
        <motion.h1
          variants={item}
          className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Aung Min Khant</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:shadow-xl"
          >
            View My Work
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-primary backdrop-blur-sm transition-all hover:border-violet-500/40 hover:bg-white/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-full p-3 text-muted transition-colors hover:bg-white/10 hover:text-primary"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-16 flex flex-col items-center gap-2">
          <a
            href="#projects"
            className="flex flex-col items-center gap-1 text-muted transition-colors hover:text-primary"
            aria-label="Scroll to projects"
          >
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
