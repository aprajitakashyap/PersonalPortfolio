"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { techMarqueeItems } from "@/data/technologies";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

type TechMarqueeProps = {
  items?: string[];
  className?: string;
};

function TechItem({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-5">
      <span
        className="h-1 w-1 rounded-full bg-accent-secondary/50"
        aria-hidden="true"
      />
      <span className="font-geist text-sm font-medium tracking-[0.04em] text-text-secondary">
        {name}
      </span>
    </span>
  );
}

export function TechMarquee({
  items = techMarqueeItems,
  className,
}: TechMarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden border-y border-border/60 bg-secondary/20 py-5", className)}
      aria-label="Technologies I work with"
    >
      {prefersReducedMotion ? (
        /* Reduced motion fallback: static wrapped list */
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
            aria-label="Technologies"
          >
            {items.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border/70 bg-card px-3 py-1.5 font-geist text-xs font-medium text-text-secondary"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </Container>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex"
          aria-hidden="false"
        >
          {/* The scrolling track: we use CSS animation via className */}
          <div
            className="marquee-track flex shrink-0 items-center"
            aria-hidden="true"
          >
            {doubled.map((name, index) => (
              <TechItem key={`${name}-${index}`} name={name} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
