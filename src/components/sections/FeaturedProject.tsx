"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

function TechTag({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-secondary/60 px-3 py-1 font-geist text-xs font-medium text-text-secondary">
      {tag}
    </span>
  );
}

export function FeaturedProject() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? {} : { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <Section id="projects" className="bg-secondary/30">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 xl:gap-20"
        >
          {/* Left: Text content */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants}>
              <SectionHeading
                label="Featured Project"
                title={featured.title}
                titleAs="h2"
                titleClassName="font-[family-name:var(--font-outfit)] text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-text-primary sm:text-5xl"
                labelClassName="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-accent-secondary/90 sm:text-xs"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base font-medium leading-relaxed text-text-secondary sm:text-lg"
            >
              {featured.shortDescription}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-lg text-sm leading-7 text-text-secondary sm:text-base"
            >
              {featured.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-2"
            >
              {featured.tags.map((tag) => (
                <TechTag key={tag} tag={tag} />
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group h-11 rounded-md px-6 font-geist text-sm font-medium"
              >
                <Link
                  href={featured.liveUrl || featured.githubUrl || "#projects"}
                  target={featured.liveUrl || featured.githubUrl ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight
                    className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              {featured.githubUrl && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-md border-border px-6 font-geist text-sm font-medium text-text-primary hover:bg-card"
                >
                  <Link href={featured.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>View Code</span>
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Right: Preview image */}
          <motion.div
            variants={itemVariants}
            className="order-first lg:order-last"
          >
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-[0_20px_60px_rgba(47,47,47,0.08)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/40">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={`${featured.title} project preview`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-outfit)] text-6xl font-semibold text-accent-primary/40">
                        {featured.title.charAt(0)}
                      </div>
                      <p className="mt-2 font-geist text-sm text-text-muted">
                        {featured.title}
                      </p>
                    </div>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Project year badge */}
              <div className="absolute right-4 top-4 rounded-full border border-border/60 bg-background/80 px-3 py-1 font-geist text-xs font-medium text-text-muted backdrop-blur-sm">
                {featured.date}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
