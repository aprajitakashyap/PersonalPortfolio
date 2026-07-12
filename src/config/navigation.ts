export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  mainNav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
};
