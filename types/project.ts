import type { BaseEntity } from "./common";

export interface Project extends BaseEntity {
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  previewVideo?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  date: string;
  overview: string;
  problemStatement: string;
  motivation: string;
  architecture: string;
  techDecisions: string;
  challenges: string;
  failedAttempts: string;
  tradeoffs: string;
  finalSolution: string;
  performanceMetrics: string;
  lessonsLearned: string;
  futureImprovements: string;
}
