import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const contactCards = [
  {
    href: "mailto:aung.m.khant22@gmail.com",
    icon: Mail,
    title: "Email",
    description: "aung.m.khant22@gmail.com",
  },
  {
    href: "https://github.com/Aung-Khant",
    icon: Github,
    title: "GitHub",
    description: "Repositories and contributions",
  },
  {
    href: "https://www.linkedin.com/in/real-aungminkhant/",
    icon: Linkedin,
    title: "LinkedIn",
    description: "Professional profile",
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
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
          <h2 className="section-title">Contact</h2>
          <p className="section-desc max-w-xl">
            Open to collaboration, opportunities, or a quick hello.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35 },
                },
              }}
              className="card-surface flex flex-col p-5 sm:p-6"
            >
              <card.icon className="h-[1.125rem] w-[1.125rem] text-primary" />
              <h3 className="mt-3 text-sm font-medium text-primary">
                {card.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {card.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
