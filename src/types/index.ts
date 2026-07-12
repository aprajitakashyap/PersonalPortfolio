// Barrel exports for all types
export * from "./common";
export * from "./personal";
export * from "./project";
export * from "./experience";
export * from "./achievement";
export * from "./certificate";

// Re-export TechStack for backward compatibility (will move to technologies later)
export interface TechStack {
  id: string;
  name: string;
  category: string;
  icon?: string;
}
