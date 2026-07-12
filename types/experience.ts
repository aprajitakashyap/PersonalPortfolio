import type { BaseEntity } from "./common";

export interface Experience extends BaseEntity {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
}
