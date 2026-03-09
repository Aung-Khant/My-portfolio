// TODO: Replace with real content

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "alpha",
    title: "Project Alpha",
    description:
      "A web application built to solve real problems. Details coming soon.",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "beta",
    title: "Project Beta",
    description:
      "An experiment in creativity and code. More info soon.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "gamma",
    title: "Project Gamma",
    description: "Built to learn, built to ship.",
    tags: ["Next.js", "Prisma", "Vercel"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
