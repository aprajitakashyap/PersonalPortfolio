"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/personal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const Hero = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex-1 w-full"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="text-accent-primary font-medium"
            >
              {personalInfo.greeting}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg md:text-xl text-text-secondary"
            >
              {personalInfo.headline}
            </motion.p>
            <div className="mt-8 space-y-4">
              {personalInfo.intro.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-text-secondary"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button className="bg-accent-primary text-text-inverse hover:bg-accent-primary/90">
                Explore Projects
              </Button>
              <Button variant="outline" className="border-border-color text-text-primary hover:bg-background-card">
                Resume
              </Button>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <SocialLinks links={socialLinks} />
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <Image
                src={personalInfo.avatarUrl}
                alt={`${personalInfo.name} professional photograph`}
                width={400}
                height={400}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
