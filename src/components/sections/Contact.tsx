"use client";

import { useRef } from "react";
import { Mail } from "lucide-react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? {} : { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <Section id="contact">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="font-geist text-[0.7rem] font-medium uppercase tracking-[0.25em] text-accent-secondary/90 sm:text-xs"
          >
            Contact
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-[family-name:var(--font-outfit)] text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-text-primary sm:text-5xl"
          >
            Let&apos;s Build Something Together.
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-7 text-text-secondary sm:text-lg"
          >
            Whether it&apos;s building scalable software, discussing engineering ideas,
            collaborating on exciting projects, or simply saying hello — I&apos;d love
            to hear from you.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <SocialLinks
              linkClassName="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-text-muted hover:text-accent-primary sm:text-sm"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            className="mx-auto mt-12 max-w-md space-y-4 text-left"
          >
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md border border-border/70 bg-card px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-border/70 bg-card px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Reason to connect..."
                className="w-full resize-none rounded-md border border-border/70 bg-card px-4 py-3 text-sm font-medium text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="group h-12 w-full rounded-md px-8 font-[family-name:var(--font-outfit)] text-sm font-medium"
            >
              <span>Send Message</span>
              <Mail
                className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </motion.form>

          {/* Availability badge */}
          {personalInfo.availability && (
            <motion.div variants={itemVariants} className="mt-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 font-geist text-sm font-medium text-text-secondary">
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-accent-primary"
                  aria-hidden="true"
                />
                <span>{personalInfo.availability}</span>
              </p>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
