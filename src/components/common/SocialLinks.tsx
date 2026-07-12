import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
};

export const SocialLinks = ({ links, className }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${link.name}`}
          className="text-text-secondary hover:text-accent-primary transition-colors duration-150"
        >
          {iconMap[link.name]}
        </a>
      ))}
    </div>
  );
};
