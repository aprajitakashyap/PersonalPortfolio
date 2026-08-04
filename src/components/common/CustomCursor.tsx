"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { stiffness: 500, damping: 40, mass: 0.4 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const fastSpring = { stiffness: 1200, damping: 50, mass: 0.2 };
  const dotX = useSpring(0, fastSpring);
  const dotY = useSpring(0, fastSpring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleEnter);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleEnter);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [x, y, dotX, dotY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-accent-primary mix-blend-multiply"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "rgba(92,107,46,0.08)" : "transparent",
          transition: "width 0.25s ease, height 0.25s ease, background-color 0.2s ease, opacity 0.3s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 6 : 5,
          height: isHovering ? 6 : 5,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
