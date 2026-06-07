import { motion, useInView } from "framer-motion";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { studyGuides } from "../data/studyGuides";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

export function StudyGuides() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section ref={ref} className="section-shell">
        <div className="section-inner">
          <Link
            to="/"
            className="link-quiet mb-8 inline-flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-3 flex items-center gap-2 text-muted">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm">Study Guides</span>
            </div>
            <h1 className="section-title">Exam prep guides</h1>
            <p className="section-desc">
              Printable study guides for Math 7 and CS 42 final exams.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {studyGuides.map((guide, i) => (
              <motion.article
                key={guide.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="card-surface flex min-h-0 flex-col p-5 sm:p-6"
              >
                <p className="text-xs text-muted">{guide.course}</p>
                <h2 className="mt-1.5 text-base font-medium text-primary sm:text-lg">
                  {guide.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {guide.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-subtle pt-4">
                  <a
                    href={guide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    aria-label={`Open ${guide.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open guide
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  );
}
