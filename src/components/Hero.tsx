import { memo, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/constants";
import { heroStats, socialLinks } from "@/data/portfolio";
import { fadeUp, scaleIn, slideLeft, slideRight, staggerContainer } from "@/utils/motion";
import Logo from "../assets/images/image.png";


const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return undefined;

    const context = gsap.context(() => {
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 26,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    });

    return () => context.revert();
  }, []);

  const [firstName, lastName] = SITE.name.split(" ");

  return (
    // <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 scroll-mt-28">
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-12 pt-12 scroll-mt-28">

      <div className="absolute right-[8%] top-28 h-40 w-40 rounded-full border border-red-600/20 bg-red-600/5 blur-3xl" />
      <div className="absolute bottom-20 left-[6%] h-44 w-44 rounded-full bg-red-700/10 blur-[90px]" />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 pt-8 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:pt-16 lg:pb-20">
        <Reveal variants={slideLeft}>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 shadow-[0_0_28px_rgba(239,68,68,0.14)]"
            >
              <Sparkles className="h-4 w-4" />
              Hi, I'm
            </motion.div>

            <motion.h1
              variants={fadeUp}
              whileHover={{
                y: -9,
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <motion.span
                animate={{
                  y: [0, -7, 0],
                  rotateZ: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
              >
                {firstName}
              </motion.span>{" "}

              <motion.span
                animate={{
                  y: [0, -9, 0],
                  rotateZ: [0, -0.8, 0],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.06,
                  z: 35,
                }}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
                className="text-[#ff0000e8] drop-shadow-[0_0_34px_rgba(239,68,68,0.3)]"
              >
                {lastName}
              </motion.span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              <TypeAnimation
                sequence={["Frontend Developer", 1800, "React.js Developer", 1800, "UI Implementation Expert", 1800]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-white"
              />
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-luxury-muted sm:text-lg">
              I craft refined, responsive, and performance-minded web experiences with React, TypeScript, Tailwind CSS, and
              a strong eye for premium UI detail.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0000e8] px-7 py-4 text-sm font-bold text-white shadow-redGlow transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-redCard focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-luxury-black"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-luxury-black"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={label}
                    className={`grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] 
                        bg-white/[0.04] text-white/75 transition hover:-translate-y-1 ${hoverColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[20px] border border-white/[0.08] bg-white/[0.035] px-4 py-4 backdrop-blur-xl"
                >
                  <div className="text-2xl font-extrabold text-white sm:text-3xl">
                    <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
                    <span className="text-[#ff0000e8]">{stat.suffix}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-luxury-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>

        <Reveal variants={slideRight} className="relative mx-auto w-full max-w-[580px]">
          <motion.div variants={scaleIn} className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-[92px]" />
            <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-red-500/22 via-transparent to-red-700/18 blur-3xl" />

            <div ref={orbitRef} className="absolute inset-1 rounded-full border border-red-500/20">
              <span className="absolute left-10 top-14 h-3 w-3 rounded-full bg-[#ff0000e8] shadow-[0_0_24px_rgba(239,68,68,0.9)]" />
              <span className="absolute bottom-16 right-12 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="absolute inset-[7%] rounded-full border border-white/[0.08] bg-[#111111] p-3 shadow-[0_32px_120px_rgba(239,68,68,0.18)]">
              <div className="h-full rounded-full border border-red-600/30 bg-[#0d0d0d] p-2">
                <img
                  src={Logo}
                  alt="Portrait illustration of Yash Patel"
                  className="h-full w-full rounded-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="absolute bottom-[12%] right-[2%] flex items-center gap-3 rounded-full border border-white/[0.1] bg-[#111111]/90 px-5 py-3 shadow-luxury backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-semibold text-white">Available for work</span>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default memo(Hero);




