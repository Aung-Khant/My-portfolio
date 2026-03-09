import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { useRef } from "react";

export function Resume() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="resume"
      ref={ref}
      className="relative px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="text-lg text-muted"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Want to know more about my background?
        </motion.p>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-violet-500/40"
        >
          <Download className="h-5 w-5" />
          Download My Resume
        </motion.a>
      </div>
    </section>
  );
}
