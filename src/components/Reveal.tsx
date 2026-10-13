import { memo, type PropsWithChildren } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { defaultTransition, fadeUp } from "@/utils/motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  variants?: Variants;
  threshold?: number;
}>;

const Reveal = ({ children, className = "", delay = 0, variants = fadeUp, threshold = 0.16 }: RevealProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
};

export default memo(Reveal);
