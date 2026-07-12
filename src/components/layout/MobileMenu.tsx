"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  activeSection: string;
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
  onNavigate: (href: string) => void;
  resumeUrl: string;
};

export function MobileMenu({
  activeSection,
  isOpen,
  navItems,
  onClose,
  onNavigate,
  resumeUrl,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm"
        aria-label="Close navigation menu"
        onClick={onClose}
      />
      <div className="absolute inset-x-5 top-5 rounded-[1.5rem] border border-border bg-background/95 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="font-geist text-lg font-semibold tracking-[-0.04em] text-text-primary">
            Navigation
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full text-text-secondary"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X aria-hidden="true" />
          </Button>
        </div>
        <nav aria-label="Mobile primary navigation" className="mt-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 font-geist text-base font-medium text-text-secondary transition-colors duration-150 hover:bg-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive && "bg-secondary text-text-primary"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate(item.href);
                    }}
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full bg-transparent transition-colors duration-150",
                        isActive && "bg-accent-primary"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button
            asChild
            className="mt-8 h-11 w-full rounded-md font-geist text-sm font-medium"
          >
            <Link href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
