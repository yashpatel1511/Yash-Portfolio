import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";

type LoaderProps = {
  isVisible?: boolean;
};

const Loader = ({ isVisible = true }: LoaderProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-luxury-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration:0.40, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="relative grid h-56 w-56 place-items-center">
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-500/30"
              animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating border */}
            <motion.div
              className="absolute h-56 w-56 rounded-full border-4 border-white/10 border-t-red-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {/* Extra glowing ring */}
            <motion.div
              className="absolute h-64 w-64 rounded-full border border-red-500/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-2xl font-extrabold text-white"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                YASH <span className="text-red-500"> PATEL</span>
              </motion.span>
            </div>
          </div>

          {/* Loading text + spinner BELOW ring */}
          <div className="mt-1 flex items-center space-x-3">
            {/* Spinner icon */}
            <motion.div
              className="h-5 w-5 rounded-full border-2 border-red-500 border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            {/* Loading text */}
            <motion.span
              className="text-sm font-medium text-red-400 tracking-widest"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Loading Portfolio…
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Loader);
