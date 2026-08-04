"use client";

import { ArrowDown, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const availabilityText = personalInfo.availability ?? personalInfo.location;
  const headlineMatch = personalInfo.headline.match(/^(.*?)(\sbuilding.*)$/i);
  const headlineLead = headlineMatch?.[1] ?? personalInfo.headline;
  const headlineAccent = headlineMatch?.[2]?.trimStart();

  const containerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? {}
        : {
            duration: 0.35,
            ease: "easeOut" as const,
          },
    },
  };

  return (
    <Section id="home" className="overflow-hidden pt-10 md:pt-14 lg:pt-16">
      <Container>
        <motion.div
          className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,440px)] xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="w-full">
              <div className="max-w-2xl space-y-3 sm:space-y-4">
                <p className="font-[family-name:var(--font-outfit)] text-lg font-light italic text-accent-secondary/80 sm:text-xl">
                  {personalInfo.greeting}
                </p>
                <p className="font-[family-name:var(--font-outfit)] text-[2.9rem] font-semibold italic leading-[1.0] tracking-[-0.025em] text-text-primary sm:text-5xl lg:text-[3.7rem]">
                  {personalInfo.name}
                </p>
              </div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-8 max-w-4xl font-[family-name:var(--font-outfit)] text-[2.65rem] font-bold italic leading-[1.05] tracking-[-0.03em] text-text-primary sm:mt-10 sm:text-5xl lg:mt-12 lg:text-[4rem]"
            >
              <span className="block sm:inline">{headlineLead}</span>
              {headlineAccent ? (
                <>
                  {" "}
                  <span className="mt-2 block bg-gradient-to-r from-[#5C6B2E] via-[#7A8C44] to-[#96A855] bg-clip-text text-transparent sm:mt-0 sm:inline">
                    {headlineAccent}
                  </span>
                </>
              ) : null}
            </motion.h1>
            <div className="mt-8 max-w-[540px] space-y-3 sm:mt-10 sm:space-y-4">
              {personalInfo.intro.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={itemVariants}
                  className="text-base leading-7 text-text-secondary sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group h-11 rounded-md px-6 font-geist text-sm font-medium"
              >
                <Link href="#projects">
                  <span>{personalInfo.primaryCtaLabel}</span>
                  <ArrowDown
                    className="transition-transform duration-200 ease-out motion-reduce:transform-none group-hover:translate-y-[3px] group-focus-visible:translate-y-[3px]"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-md border-border px-6 font-geist text-sm font-medium text-text-primary hover:bg-card"
              >
                <Link href={personalInfo.resumeUrl} target="_blank">
                  {personalInfo.secondaryCtaLabel}
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
              <SocialLinks
                linkClassName="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-text-muted hover:text-accent-primary sm:text-sm"
              />
            </motion.div>
            {availabilityText ? (
              <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
                <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 font-geist text-sm font-medium text-text-secondary">
                  <MapPin className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  <span>{availabilityText}</span>
                </p>
              </motion.div>
            ) : null}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mx-auto flex w-full max-w-sm justify-center md:max-w-md lg:max-w-none"
          >
            <div className="w-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-2.5 shadow-[0_18px_50px_rgba(47,47,47,0.06)] sm:p-3">
              <div className="overflow-hidden rounded-[1.25rem] bg-secondary/20">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={`${personalInfo.name} professional photograph`}
                  width={920}
                  height={1150}
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 420px, (min-width: 768px) 448px, calc(100vw - 40px)"
                  className="aspect-[3/4] h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
