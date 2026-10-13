import type { Variants } from "framer-motion";

export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
