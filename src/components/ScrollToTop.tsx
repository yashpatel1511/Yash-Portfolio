import { memo, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-2xl bg-red-500 text-white shadow-redGlow transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-luxury-black"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.94 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.94 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default memo(ScrollToTop);
