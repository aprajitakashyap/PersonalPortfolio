"use client";

import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { experiences } from "@/data/experience";
import type { Experience } from "@/types";
import { cn } from "@/lib/utils";

function TechTag({ name }: { name: string }) {
  return (
    <span className="inline-flex rounded-full border border-border/70 bg-secondary/60 px-3 py-1 font-geist text-xs font-medium text-text-secondary">
      {name}
    </span>
  );
}

function TimelineEntry({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  const duration = experience.endDate
    ? `${experience.startDate} – ${experience.endDate}`
    : `${experience.startDate} – Present`;

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : index * 0.1,
      }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline indicator column */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-sm">
          <Briefcase className="h-4 w-4 text-accent-primary" aria-hidden="true" />
        </div>
        {/* Connector line */}
        {!isLast && (
          <div className="timeline-connector mt-2 w-px flex-1" aria-hidden="true" />
        )}
      </div>

      {/* Content card */}
      <div
        className={cn(
          "group mb-10 flex-1 overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-[0_2px_12px_rgba(47,47,47,0.04)]",
          "transition-[border-color,box-shadow] duration-300 ease-out",
          "hover:border-accent-primary/30 hover:shadow-[0_8px_30px_rgba(168,187,163,0.12)]",
          isLast && "mb-0"
        )}
      >
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="font-geist text-lg font-semibold tracking-tight text-text-primary">
              {experience.role}
            </h3>
            <p className="mt-0.5 font-geist text-base font-medium text-accent-secondary">
              {experience.company}
            </p>
          </div>

          <div className="flex flex-col gap-1 sm:items-end sm:text-right">
            <span className="inline-flex items-center gap-1.5 font-geist text-xs font-medium text-text-muted">
              <Calendar className="h-3 w-3 shrink-0" aria-hidden="true" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1.5 font-geist text-xs font-medium text-text-muted">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-text-secondary">
          {experience.description}
        </p>

        {/* Achievements */}
        {experience.achievements.length > 0 && (
          <ul className="mt-4 space-y-2" aria-label="Key contributions">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                  aria-hidden="true"
                />
                <span className="leading-6">{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="experience" className="bg-secondary/20">
      <Container>
        <motion.div
          ref={headingRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <SectionHeading
            label="Experience"
            title="Where I've Worked"
            description="My professional journey — internships and roles that shaped how I think about engineering."
          />
        </motion.div>

        <div className="mt-12 md:mt-16">
          {experiences.map((experience, index) => (
            <TimelineEntry
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
