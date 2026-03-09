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
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/25 blur-[100px]"
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-1/2 h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[90px]"
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-violet-400/40"
            style={{
              left: `${15 + i * 7}%`,
              top: `${10 + (i % 5) * 22}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`c-${i}`}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/35"
            style={{
              right: `${10 + (i % 4) * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 5 + i * 0.25,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Magnetic field lines */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full opacity-[0.28] dark:opacity-[0.2]"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="field-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(124, 58, 237)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(124, 58, 237)" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Magnetic field lines — curved paths suggesting dipole / flow */}
          <motion.path
            d="M 200 400 Q 400 200 600 400 T 1000 400"
            stroke="url(#field-gradient)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="8 24"
            filter="url(#glow)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -32 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 100 500 Q 350 300 600 500 T 1100 500"
            stroke="url(#field-gradient)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="6 20"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -26 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 150 300 Q 400 100 600 300 T 1050 300"
            stroke="url(#field-gradient)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="6 20"
            initial={{ strokeDashoffset: 26 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 250 600 Q 450 450 600 600 T 950 600"
            stroke="url(#field-gradient)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 16"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -20 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 300 250 Q 500 150 600 250 T 900 250"
            stroke="url(#field-gradient)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 16"
            initial={{ strokeDashoffset: 20 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {/* Vertical / radial-style curves */}
          <motion.path
            d="M 600 100 Q 750 400 600 700"
            stroke="url(#field-gradient)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="6 22"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -28 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 600 150 Q 720 400 600 650"
            stroke="url(#field-gradient)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 18"
            initial={{ strokeDashoffset: 22 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 600 700 Q 450 400 600 100"
            stroke="url(#field-gradient)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="6 22"
            initial={{ strokeDashoffset: 28 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 600 650 Q 480 400 600 150"
            stroke="url(#field-gradient)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 18"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -22 }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

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
