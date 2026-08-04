import type { TechStack } from "@/types";

export const techStack: TechStack[] = [
  { id: "1", name: "Java", category: "Language" },
  { id: "2", name: "Spring Boot", category: "Backend" },
  { id: "3", name: "React", category: "Frontend" },
  { id: "4", name: "Next.js", category: "Frontend" },
  { id: "5", name: "TypeScript", category: "Language" },
  { id: "6", name: "Angular", category: "Frontend" },
  { id: "7", name: "Node.js", category: "Backend" },
  { id: "8", name: "Express.js", category: "Backend" },
  { id: "9", name: "PostgreSQL", category: "Database" },
  { id: "10", name: "MongoDB", category: "Database" },
  { id: "11", name: "Firebase", category: "Backend" },
  { id: "12", name: "Docker", category: "DevOps" },
  { id: "13", name: "Git", category: "DevOps" },
  { id: "14", name: "REST APIs", category: "Backend" },
  { id: "15", name: "GraphQL", category: "Backend" },
  { id: "16", name: "AWS", category: "Cloud" },
  { id: "17", name: "Python", category: "Language" },
  { id: "18", name: "TailwindCSS", category: "Frontend" },
  { id: "19", name: "Prisma", category: "Database" },
  { id: "20", name: "Redis", category: "Database" },
  { id: "21", name: "OpenAI API", category: "AI/ML" },
  { id: "22", name: "Framer Motion", category: "Frontend" },
];

// Flat list of technology names for the marquee component
export const techMarqueeItems: string[] = techStack.map((tech) => tech.name);
