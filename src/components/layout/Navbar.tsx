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
  return "AK";
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

      const sectionIds = navItems
        .map((item) => item.href)
        .filter((href) => href.startsWith("#"))
        .map((href) => href.slice(1));

      const scrollPosition = window.scrollY + 140; // 140px header offset

      // If at top of page
      if (window.scrollY < 100) {
        setActiveSection("#home");
        return;
      }

      // If near bottom of page, highlight last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(navItems[navItems.length - 1].href);
        return;
      }

      let current = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
              className="group inline-flex items-center rounded-md py-1.5 pr-2 text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${siteConfig.author} home`}
              onClick={(event) => {
                event.preventDefault();
                navigateToSection("#home");
              }}
            >
              <span
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/80 text-sm font-semibold tracking-[0.2em] text-text-primary shadow-sm transition-colors duration-200 ease-out md:h-10 md:w-10 md:text-base",
                  "font-[family-name:var(--font-outfit)]"
                )}
                aria-hidden="true"
              >
                {brandMark}
              </span>
              <span className="ml-3 hidden overflow-hidden text-sm font-medium tracking-[-0.025em] text-text-secondary md:inline-flex md:items-center">
                <span className="translate-x-2 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:opacity-100">
                  {siteConfig.author}
                </span>
              </span>
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
                          "relative py-1 font-geist text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                          isActive ? "text-text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
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
                            "mt-1 block h-0.5 w-full rounded-full bg-accent-primary transition-transform duration-200 ease-out",
                            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
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
