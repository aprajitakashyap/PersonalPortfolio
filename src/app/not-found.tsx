"use client";

import Link from "next/link";
import { ArrowLeft, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-primary/10 blur-[100px] md:left-1/3" />
        <div className="absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[8rem] font-bold italic leading-none text-accent-primary/80 md:text-[10rem]">
            404
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4"
        >
          <h1 className="font-geist text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 font-inter text-base text-text-secondary">
            {"Sorry, we couldn't find the page you're looking for. Perhaps it has been moved or doesn't exist."}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-md px-6 font-geist text-sm font-medium"
          >
            <Link href="/#home">
              <Home className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              Go Back Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-md border-border px-6 font-geist text-sm font-medium text-text-primary hover:bg-card"
          >
            <Link href="/#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Subtle brand label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-8 text-xs font-medium uppercase tracking-widest text-text-muted"
      >
        Aprajita Kashyap • Portfolio
      </motion.div>
    </div>
  );
}
