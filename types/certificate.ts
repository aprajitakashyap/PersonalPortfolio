import type { BaseEntity } from "./common";

export interface Certificate extends BaseEntity {
  name: string;
  issuingOrg: string;
  date: string;
  credentialUrl?: string;
}
