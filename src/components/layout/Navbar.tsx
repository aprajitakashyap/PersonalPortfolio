"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { navigationConfig, siteConfig } from "@/config";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const MOBILE_BREAKPOINT = 1024;

function getBrandMark(name: string) {
  const initials = name
    .split(" ")
    .map((part) => part.trim()[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return `${initials}.`;
}

export function Navbar() {
  const navItems = navigationConfig.mainNav;
  const [activeSection, setActiveSection] = useState("#home");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const brandMark = useMemo(() => getBrandMark(siteConfig.author), []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const navigateToSection = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      setActiveSection(href);
      setIsMobileMenuOpen(false);
      return;
    }

    const headerOffset = 96;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top: targetTop,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40">
        <Container>
          <div
            className={cn(
              "mt-5 flex min-h-16 items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-out md:px-6",
              hasScrolled
                ? "border-border bg-background/80 shadow-sm backdrop-blur-xl"
                : "bg-transparent"
            )}
          >
            <Link
              href="#home"
              className="rounded-md font-geist text-xl font-semibold tracking-[-0.04em] text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${siteConfig.author} home`}
              onClick={(event) => {
                event.preventDefault();
                navigateToSection("#home");
              }}
            >
              {brandMark}
            </Link>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-8 lg:flex"
            >
              <ul className="flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-md font-geist text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          isActive && "text-text-primary"
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault();
                          navigateToSection(item.href);
                        }}
                      >
                        <span>{item.label}</span>
                        <span
                          className={cn(
                            "mt-1 block h-px w-full origin-left scale-x-0 bg-accent-primary transition-transform duration-150 ease-out",
                            isActive && "scale-x-100"
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
                size="sm"
                className="h-10 rounded-md px-5 font-geist text-sm font-medium"
              >
                <Link href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
                  Resume
                </Link>
              </Button>
            </nav>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full text-text-primary lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            >
              <Menu aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </header>

      <MobileMenu
        activeSection={activeSection}
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={navigateToSection}
        resumeUrl={personalInfo.resumeUrl}
      />
    </>
  );
}
