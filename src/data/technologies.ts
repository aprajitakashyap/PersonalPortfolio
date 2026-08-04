import type { TechStack } from "@/types";

export const techStack: TechStack[] = [
  { id: "1", name: "Java", category: "Language" },
  { id: "2", name: "Python", category: "Language" },
  { id: "3", name: "JavaScript", category: "Language" },
  { id: "4", name: "SQL", category: "Language" },
  { id: "5", name: "C", category: "Language" },
  { id: "6", name: "React.js", category: "Frontend" },
  { id: "7", name: "Flutter", category: "Frontend" },
  { id: "8", name: "HTML5", category: "Frontend" },
  { id: "9", name: "CSS3", category: "Frontend" },
  { id: "10", name: "Node.js", category: "Backend" },
  { id: "11", name: "Express.js", category: "Backend" },
  { id: "12", name: "RESTful APIs", category: "Backend" },
  { id: "13", name: "JWT Authentication", category: "Backend" },
  { id: "14", name: "Socket.io", category: "Backend" },
  { id: "15", name: "MongoDB", category: "Database" },
  { id: "16", name: "PostgreSQL", category: "Database" },
  { id: "17", name: "MySQL", category: "Database" },
  { id: "18", name: "Docker", category: "Tools" },
  { id: "19", name: "Git", category: "Tools" },
  { id: "20", name: "GitHub", category: "Tools" },
  { id: "21", name: "Postman", category: "Tools" },
  { id: "22", name: "GitHub Copilot", category: "AI Tools" },
  { id: "23", name: "Render", category: "Cloud" },
];

export const techMarqueeItems: string[] = techStack.map((tech) => tech.name);
