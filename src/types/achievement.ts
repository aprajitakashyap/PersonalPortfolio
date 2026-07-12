import type { BaseEntity } from "./common";

export interface Achievement extends BaseEntity {
  title: string;
  description: string;
  date: string;
  proofUrl?: string;
}
