export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  hackathon?: string;
}

export const projects: Project[] = [
  {
    id: "realibuddy",
    title: "Realibuddy",
    description:
      "Real-time AI voice fact-checking that identifies false claims and delivers physical feedback via the Pavlok wearable. Built with Deepgram, Perplexity AI, and Pavlok API. HackCC Fall 2025 — Best AI/ML.",
    tags: ["TypeScript", "Node.js", "Deepgram", "Perplexity AI", "WebRTC", "Tailwind"],
    githubUrl: "https://github.com/seanesla/Realibuddy",
    liveUrl: "https://devpost.com/software/pavshock",
    hackathon: "HackCC Fall 2025",
  },
  {
    id: "solaura",
    title: "Solaura",
    description:
      "Spatial awareness for blind and low-vision users. iPhone LiDAR + YOLOv8 detect objects, 3D position is mapped in real time, and directional audio guides you—and your hand—to the target. Runs on-device.",
    tags: ["Swift", "iOS", "LiDAR", "YOLOv8", "Gemini", "Next.js", "Three.js"],
    githubUrl: "#",
    liveUrl: "https://devpost.com/software/solaura-bouewf",
    hackathon: "Hack for Humanity 2026",
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
