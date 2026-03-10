import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { projects } from "../data/projects";
import realibuddyLogo from "../assets/realibuddy-logo.png";
import solauraLogo from "../assets/solaura-logo.png";

const projectLogos: Record<string, string> = {
  realibuddy: realibuddyLogo,
  solaura: solauraLogo,
};

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
      className="relative px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Hackathon & side projects
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-violet-500/30 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.4)] focus-within:border-violet-500/30 dark:bg-white/[0.03] sm:p-8"
            >
              {/* Logo */}
              {projectLogos[project.id] && (
                <div className="mb-5 flex justify-center">
                  <img
                    src={projectLogos[project.id]}
                    alt=""
                    className="h-9 w-auto max-w-[160px] object-contain object-center"
                  />
                </div>
              )}

              {/* Title + badges */}
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-xl font-bold text-primary sm:text-[1.25rem]">
                  {project.title}
                </h3>
                {"hackathon" in project && project.hackathon && (
                  <span className="rounded-md bg-violet-500/20 px-2.5 py-1 text-xs font-medium text-violet-300">
                    {project.hackathon}
                  </span>
                )}
                {"award" in project && project.award && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/20 px-2.5 py-1 text-xs font-medium text-amber-300">
                    <Award className="h-3.5 w-3.5" />
                    {project.award}
                  </span>
                )}
              </div>

              {/* Role */}
              {"role" in project && project.role && (
                <p className="mt-2 text-xs text-muted">
                  Role: <span className="font-medium text-primary/90">{project.role}</span>
                </p>
              )}

              {/* Description — comfortable reading size and line-height */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {/* Tech stack — scannable pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions — clear, accessible links */}
              <div className="mt-6 flex items-center gap-3">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
                  aria-label={project.liveUrl.includes("devpost") ? `View ${project.title} on Devpost` : `View ${project.title} live`}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View project</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
