"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-text-primary"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Aprajita Kashyap
            </motion.h1>
          </div>
          <div className="mt-4 overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="font-inter text-sm font-medium uppercase tracking-widest text-accent-primary"
            >
              Portfolio
            </motion.p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            className="mt-8 h-px w-48 bg-border origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
