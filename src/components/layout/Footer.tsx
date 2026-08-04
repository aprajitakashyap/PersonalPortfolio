import Link from "next/link";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Container } from "@/components/common/Container";
import { siteConfig } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-secondary/20 py-10 md:py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand mark */}
          <Link
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 font-[family-name:var(--font-cormorant-garamond)] text-base font-semibold tracking-[0.15em] text-text-primary shadow-sm transition-colors duration-200 ease-out hover:border-accent-primary/40 hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Back to top"
          >
            AK
          </Link>

          {/* Signature */}
          <p className="font-geist text-sm text-text-muted">
            Made with{" "}
            <span className="text-accent-secondary" aria-label="love">
              ♥
            </span>{" "}
            by{" "}
            <span className="font-medium text-text-secondary">
              {siteConfig.author}
            </span>
          </p>

          {/* Social links */}
          <SocialLinks
            linkClassName="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-text-muted hover:text-accent-primary sm:text-xs"
          />

          {/* Copyright */}
          <p className="font-geist text-xs text-text-muted">
            &copy; {currentYear} {siteConfig.author}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
