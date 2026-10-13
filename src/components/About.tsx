import { memo } from "react";
import { motion } from "framer-motion";

import Reveal from "@/components/Reveal";

import Yash from "@/assets/images/Yash.png";

import { aboutInfo } from "@/data/portfolio";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "@/utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 pt-0 pb-24 lg:pb-32"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">

        {/*  LEFT IMAGE CARD  */}
        <Reveal variants={slideLeft} className="relative">

          {/* Background Glow */}
          <div className="absolute -inset-6 rounded-[40px] bg-red-500/10 blur-3xl" />

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="group relative mx-auto h-[480px] max-w-[430px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0d0d0d] shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_30px_100px_rgba(239,68,68,0.20)] sm:h-[560px] lg:h-[620px]"
          >

            {/* Image */}
            <img
              src={Yash}
              alt="Yash Patel"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Dark Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            {/* Red Ambient Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.12),transparent_45%)]" />

            {/* Top Badge */}
            <div className="absolute left-5 top-5 z-20 rounded-full border border-red-500/30 bg-black/40 px-4 py-2 text-sm font-semibold text-red-300 backdrop-blur-xl">
              Yash Patel
            </div>

            {/* Decorative Top Line */}
            <div className="absolute left-1/2 top-0 h-[2px] w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
                  Frontend Developer
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Yash Patel
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  React • TypeScript • Tailwind CSS
                </p>
              </motion.div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute bottom-5 right-5 z-20 h-12 w-12 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
            </div>

          </motion.div>
        </Reveal>

        {/*  RIGHT CONTENT  */}
        <Reveal variants={slideRight} className="m-auto">

          <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            About Me
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-red-600 sm:text-4xl lg:text-5xl">
            LET ME{" "}
            <span className="text-white">
              INTRODUCE MYSELF
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-luxury-muted">

            <p>
              I am Yash Patel, a frontend developer from Navsari,
              Gujarat, India. I have completed a Master of Computer
              Applications and enjoy building interfaces that feel clean,
              fast, and thoughtfully detailed.
            </p>

            <p>
              My work combines React, TypeScript, Tailwind CSS, and
              practical UI/UX judgment to create websites that are
              responsive, accessible, and ready for real users across
              devices.
            </p>

          </div>

          {/*  INFO CARDS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >

            {aboutInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-5 shadow-luxury transition-all duration-300 hover:border-red-500/40 hover:bg-[#151515] hover:shadow-[0_15px_40px_rgba(239,68,68,0.10)]"
              >
                <p className="text-sm font-semibold text-red-400">
                  {item.label}
                </p>

                <p className="mt-3 text-sm font-semibold leading-6 text-white">
                  {item.value}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </Reveal>

      </div>
    </section>
  );
};

export default memo(About);
