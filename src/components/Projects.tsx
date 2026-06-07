import { motion, useInView } from "framer-motion";
import { Award, BookOpen, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import realibuddyLogo from "../assets/realibuddy-logo.png";
import solauraLogo from "../assets/solaura-logo.png";

const projectLogos: Record<string, string> = {
  realibuddy: realibuddyLogo,
  solaura: solauraLogo,
};

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

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-shell border-t border-subtle"
    >
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-desc">Hackathon and side projects</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="card-surface group flex min-h-0 flex-col p-5 sm:p-6"
            >
              {projectLogos[project.id] && (
                <div className="mb-4 flex justify-start">
                  <img
                    src={projectLogos[project.id]}
                    alt=""
                    className="h-7 w-auto max-w-[140px] object-contain object-left"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-medium text-primary sm:text-lg">
                  {project.title}
                </h3>
                {"hackathon" in project && project.hackathon && (
                  <span className="badge-pill">{project.hackathon}</span>
                )}
                {"award" in project && project.award && (
                  <span className="badge-pill">
                    <Award className="h-3 w-3" />
                    {project.award}
                  </span>
                )}
              </div>

              {"role" in project && project.role && (
                <p className="mt-1.5 text-xs text-muted">{project.role}</p>
              )}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-5 border-t border-subtle pt-4">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet inline-flex items-center gap-2 text-sm"
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
                  className="link-quiet inline-flex items-center gap-2 text-sm"
                  aria-label={
                    project.liveUrl.includes("devpost")
                      ? `View ${project.title} on Devpost`
                      : `View ${project.title} live`
                  }
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>View project</span>
                </a>
              </div>
            </motion.article>
          ))}

          <motion.article
            custom={projects.length}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="card-surface group flex min-h-0 flex-col p-5 sm:p-6"
          >
            <div className="mb-4 flex justify-start">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-subtle bg-bg">
                <BookOpen className="h-4 w-4 text-muted" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-medium text-primary sm:text-lg">
                Study Guides
              </h3>
              <span className="badge-pill">Exam prep</span>
            </div>

            <p className="mt-1.5 text-xs text-muted">Math 7 & CS 42</p>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              Printable final exam survival guides for Calculus I and CS 42 —
              limits, integration, core CS concepts, and last-minute review.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Math 7", "CS 42", "Final Exam"].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-5 border-t border-subtle pt-4">
              <Link
                to="/study-guides"
                className="link-quiet inline-flex items-center gap-2 text-sm"
                aria-label="Browse study guides"
              >
                <BookOpen className="h-4 w-4" />
                <span>Browse guides</span>
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
