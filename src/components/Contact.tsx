import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const contactCards = [
  {
    href: "mailto:aung.m.khant22@gmail.com",
    icon: Mail,
    title: "Send an Email",
    description: "Say hi or start a conversation",
  },
  {
    href: "https://github.com/Aung-Khant",
    icon: Github,
    title: "See my code",
    description: "Check out my repositories",
  },
  {
    href: "https://www.linkedin.com/in/real-aungminkhant/",
    icon: Linkedin,
    title: "Connect with me",
    description: "Let's network on LinkedIn",
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Whether you want to collaborate, hire, or just say hi — my inbox is
            always open.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {contactCards.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all hover:border-violet-500/30 hover:shadow-[0_0_30px_-8px_rgba(124,58,237,0.35)] dark:bg-white/[0.03]"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-400 transition-transform group-hover:scale-110">
                <card.icon className="h-7 w-7" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-primary">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{card.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
