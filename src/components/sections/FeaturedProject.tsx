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
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  // Find the first featured project
  const featured = projects.find((p) => p.featured) || projects[0];

  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? {} : { duration: 0.5, ease: "easeOut" as const },
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
          className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16 xl:gap-24"
        >
          {/* Content Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
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
              className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {featured.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-2"
            >
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border/70 bg-card px-3 py-1 font-geist text-xs font-medium text-text-secondary shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              {featured.githubUrl && (
                <Link
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-geist text-sm font-semibold text-text-primary transition-colors hover:text-accent-primary"
                  data-cursor-hover
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm border border-border/70 transition-transform group-hover:scale-105 group-hover:border-accent-primary/40">
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>View Source</span>
                </Link>
              )}
              {featured.liveUrl && (
                <Link
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-geist text-sm font-semibold text-text-primary transition-colors hover:text-accent-secondary"
                  data-cursor-hover
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm border border-border/70 transition-transform group-hover:scale-105 group-hover:border-accent-secondary/40">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>Live Demo</span>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            variants={itemVariants}
            className="group relative order-1 lg:order-2"
            onMouseEnter={() => videoRef.current?.play().catch(() => {})}
            onMouseLeave={() => {
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            }}
          >
            {/* Abstract decorative element behind image */}
            <div
              className="absolute -inset-4 -z-10 hidden rounded-[2.5rem] bg-gradient-to-tr from-accent-primary/5 via-accent-secondary/5 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-100 lg:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_8px_40px_rgba(47,47,47,0.06)] transition-transform duration-500 ease-out group-hover:shadow-[0_16px_60px_rgba(92,107,46,0.12)] lg:aspect-[16/11]" data-cursor-hover>
              <div className="absolute inset-0 bg-secondary/30">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={`${featured.title} project interface`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-outfit)] text-6xl font-semibold text-accent-primary/40">
                        {featured.title.charAt(0)}
                      </div>
                      <p className="mt-2 font-geist text-sm text-text-muted">
                        Preview unavailable
                      </p>
                    </div>
                  </div>
                )}
                {featured.date}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
