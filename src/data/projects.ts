export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  hackathon?: string;
  award?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "realibuddy",
    title: "RealiBuddy",
    description:
      "AI that holds you accountable when you lie—cyberpunk interrogation meets accountability tech. Started as a hackathon prototype with wearable feedback; v2.0 is a full rewrite for the web: browser-based, no hardware, prompt engineering at the core. Team project; my role was ideation and strategy.",
    tags: ["React", "Next.js", "Gemini", "FastAPI", "Python"],
    githubUrl: "https://github.com/seanesla/Realibuddy",
    liveUrl: "https://devpost.com/software/pavshock",
    hackathon: "HackCC",
    award: "Best AI/ML",
    role: "Ideation & strategy",
  },
  {
    id: "solaura",
    title: "Solaura",
    description:
      "Changing how we perceive the world beyond sight: spatial audio AR that guides low-vision and blind users to objects via 3D directional sound. Works with the iPhone you already have—no new device needed, just the built-in LiDAR. Built in 24h at Hack for Humanity (YOLOv8, Next.js dashboard). Team project; my role was pitch and documentation: shaping the story for judges and stakeholders, plus technical docs and demo flow.",
    tags: ["Swift", "ARKit", "YOLOv8", "Python", "Next.js"],
    githubUrl: "https://github.com/Yinghao-Guan/solaura",
    liveUrl: "https://devpost.com/software/solaura-bouewf",
    hackathon: "Hack for Humanity 2026",
    role: "Pitch & docs",
  },
];
