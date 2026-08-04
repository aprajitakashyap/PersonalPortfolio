import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Development Intern",
    company: "Xebia",
    location: "India",
    startDate: "Jun 2026",
    endDate: "Jul 2026",
    description:
      "8-week internship focused on backend API development, integration, testing, and Agile workflows across modular architecture.",
    achievements: [
      "Developed reusable API services and request/response models for integrating backend RESTful APIs across 12+ frontend modules.",
      "Collaborated with frontend, backend, and product teams in an Agile environment, contributing to feature development, code reviews, and Git-based workflows.",
      "Tested REST API integrations using Postman and assisted in identifying and debugging API-related issues during development.",
    ],
  },
  {
    id: "2",
    role: "Full Stack Development Intern",
    company: "Naiyo24",
    location: "India",
    startDate: "Apr 2026",
    endDate: "Jun 2026",
    description:
      "8-week internship developing cross-platform application UI and accelerating feature delivery with AI-assisted development tools.",
    achievements: [
      "Implemented application UI screens in Flutter by translating provided product designs and functional requirements into working interfaces.",
      "Collaborated with the development team to deliver assigned features while following the existing project architecture and coding standards.",
      "Leveraged AI-assisted development tools, including GitHub Copilot and ChatGPT, to accelerate implementation, debugging, and iterative feature development.",
    ],
  },
];
