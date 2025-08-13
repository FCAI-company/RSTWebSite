"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

type ScrollFadeProps = {
  children: React.ReactNode;
};

export const ScrollFade: React.FC<ScrollFadeProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // triggers when 10% is visible
    // removed triggerOnce so it triggers every time
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
