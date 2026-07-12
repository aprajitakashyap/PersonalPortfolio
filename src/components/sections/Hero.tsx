"use client";

import { Cormorant_Garamond } from "next/font/google";
import { ArrowDown, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

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
    <Section id="home" className="overflow-hidden pt-12 md:pt-16 lg:pt-20">
      <Container>
        <motion.div
          className="grid items-center gap-12 md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-start lg:gap-20 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,460px)] xl:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading
                label={personalInfo.greeting}
                title={personalInfo.name}
                titleAs="p"
                className="space-y-6"
                labelClassName="text-xs font-medium tracking-[0.18em] text-accent-secondary/90 sm:text-sm"
                titleClassName={`${cormorantGaramond.className} text-[2.75rem] font-semibold tracking-[-0.035em] text-text-primary sm:text-5xl lg:text-[3.5rem]`}
              />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-10 max-w-4xl font-geist text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-text-primary sm:text-6xl lg:text-[4.5rem]"
            >
              <span>{headlineLead}</span>
              {headlineAccent ? (
                <>
                  {" "}
                  <span className="bg-gradient-to-r from-accent-primary via-text-primary to-accent-secondary bg-clip-text text-transparent">
                    {headlineAccent}
                  </span>
                </>
              ) : null}
            </motion.h1>
            <div className="mt-12 max-w-[520px] space-y-4">
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
              className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group h-11 rounded-md px-6 font-geist text-sm font-medium"
              >
                <Link href="#projects">
                  <span>{personalInfo.primaryCtaLabel}</span>
                  <ArrowDown
                    className="transition-transform duration-200 ease-out motion-reduce:transform-none group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5"
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
            <motion.div
              variants={itemVariants}
              className="mt-12"
            >
              <SocialLinks
                linkClassName="text-xs font-medium text-text-muted hover:text-accent-primary sm:text-sm"
              />
            </motion.div>
            {availabilityText ? (
              <motion.div
                variants={itemVariants}
                className="mt-10"
              >
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-geist text-sm font-medium text-text-secondary">
                  <MapPin className="h-4 w-4 text-accent-secondary" aria-hidden="true" />
                  <span>{availabilityText}</span>
                </p>
              </motion.div>
            ) : null}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mx-auto flex w-full max-w-sm justify-center md:max-w-md lg:max-w-none lg:pt-10"
          >
            <div className="w-full overflow-hidden rounded-[2rem] border border-border/80 bg-card p-3 shadow-sm">
              <div className="overflow-hidden rounded-[1.5rem] bg-secondary/20">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={`${personalInfo.name} professional photograph`}
                  width={920}
                  height={1150}
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 420px, (min-width: 768px) 448px, calc(100vw - 40px)"
                  className="aspect-[4/5] h-auto w-full object-cover"
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
