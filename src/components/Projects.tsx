import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { projects } from "../data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A collection of projects I've worked on — from experiments to
            real-world apps
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.4)] dark:bg-white/[0.03]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-xl font-bold text-primary">
                  {project.title}
                </h3>
                {"hackathon" in project && project.hackathon && (
                  <span className="rounded-md bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-300">
                    {project.hackathon}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.liveUrl.includes("devpost") ? "View on Devpost" : "Live demo"}
                  className="rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
