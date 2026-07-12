export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
};
