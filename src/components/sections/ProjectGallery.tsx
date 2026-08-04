"use client";

import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

function TechTag({ tag }: { tag: string }) {
  return (
    <span className="inline-flex rounded-full border border-border/70 bg-secondary/60 px-2.5 py-0.5 font-geist text-[0.725rem] font-medium text-text-secondary">
      {tag}
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.08, 0.3),
      }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card shadow-[0_4px_20px_rgba(47,47,47,0.04)]",
        "transition-[border-color,box-shadow,transform] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-accent-primary/40 hover:shadow-[0_12px_36px_rgba(168,187,163,0.18)]"
      )}
    >
      {/* Image / Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/40" data-cursor-hover>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-background/60">
            <span className="font-[family-name:var(--font-outfit)] text-5xl font-semibold text-accent-primary/30">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Video Preview Overlay */}
        {project.previewVideo && (
          <video
            ref={videoRef}
            src={project.previewVideo}
            muted
            loop
            playsInline
            className="absolute inset-0 z-10 h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
          />
        )}
        
        {/* Year badge */}
        <span className="absolute right-3 top-3 z-20 rounded-full border border-border/50 bg-background/80 px-2.5 py-0.5 font-geist text-[0.65rem] font-medium text-text-muted backdrop-blur-sm">
          {project.date}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-geist text-lg font-semibold tracking-tight text-text-primary group-hover:text-accent-secondary transition-colors duration-150">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-6 text-text-secondary line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex rounded-full border border-border/70 bg-background/80 px-2 py-0.5 font-geist text-[0.7rem] font-medium text-text-muted">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 font-geist text-xs font-medium text-text-secondary transition-colors duration-150 hover:text-text-primary"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub Repository</span>
            </Link>
          ) : <span />}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1 font-geist text-xs font-medium text-accent-secondary transition-colors duration-150 hover:underline"
              aria-label={`View ${project.title} live demo`}
            >
              <span>Live Demo</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectGallery() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  // Show all projects in the gallery grid
  const galleryProjects = projects;

  return (
    <Section id="more-projects">
      <Container>
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <SectionHeading
            label="Projects"
            title="Things I've Built"
            description="A collection of my engineering projects — from AI platforms and reverse auction marketplaces to carbon footprint trackers and parcel logistics systems."
          />
        </motion.div>

        {/* Responsive Grid layout perfectly fitting section container boundaries */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {galleryProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
