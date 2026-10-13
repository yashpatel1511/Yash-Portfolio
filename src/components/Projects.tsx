
import { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        scroll-mt-28
        px-4
        py-20
        sm:px-6
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1150px]">
        {/* SECTION HEADER */}

        <SectionHeader
          eyebrow="My Projects"
          title="Some Things I've Built"
          description="Selected builds shaped around clean interfaces, thoughtful interactions, and reliable frontend structure."
        />

        {/* STICKY STACKED PROJECTS */}

        <div className="mt-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                top: `${90 + index * 10}px`,
                zIndex: index + 1,
              }}
              className="
                group
                sticky
                mx-auto
                mb-20
                w-full
                max-w-[1050px]

                overflow-hidden
                rounded-[26px]

                border
                border-white/[0.08]

                bg-[#080808]

                shadow-[0_25px_70px_rgba(0,0,0,0.55)]

                transition-all
                duration-500

                hover:border-red-500/30
                hover:shadow-[0_0_35px_rgba(239,68,68,0.12),0_30px_80px_rgba(0,0,0,0.6)]
              "
            >
              {/* 
                  CARD GLOW
              */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-0

                  opacity-0

                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    absolute
                    left-[-120px]
                    top-[-120px]

                    h-[300px]
                    w-[300px]

                    rounded-full

                    bg-red-500/10

                    blur-[110px]
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[-120px]
                    right-[-120px]

                    h-[320px]
                    w-[320px]

                    rounded-full

                    bg-red-600/10

                    blur-[120px]
                  "
                />
              </div>

              {/* 
                  CARD CONTENT
              */}

              <div
                className="
                  relative
                  z-10

                  grid
                  min-h-[420px]

                  md:grid-cols-[1fr_1fr]
                "
              >
                {/* 
                    LEFT IMAGE
                */}

                <div
                  className="
                    relative

                    min-h-[250px]
                    w-full

                    overflow-hidden

                    bg-[#101010]

                    sm:min-h-[320px]
                    md:min-h-full
                  "
                >
                  <motion.img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0

                      h-full
                      w-full

                      object-cover
                      object-center
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* IMAGE RED GLOW */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-x-10
                      bottom-[-20px]

                      h-[70px]

                      bg-red-500/20

                      blur-[50px]
                    "
                  />

                  {/* PROJECT NUMBER */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5

                      flex
                      h-11
                      w-11

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/15

                      bg-black/55

                      text-xs
                      font-bold
                      text-white

                      backdrop-blur-xl

                      shadow-[0_0_18px_rgba(239,68,68,0.25)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* 
                    RIGHT INFORMATION
                */}

                <div
                  className="
                    relative

                    flex
                    flex-col
                    justify-start

                    overflow-hidden

                    p-6

                    sm:p-8
                    md:p-8
                    lg:p-10
                  "
                >
                  {/* TOP GLOW */}

                  <div
                    className="
                      pointer-events-none

                      absolute
                      right-[-80px]
                      top-[-90px]

                      h-[240px]
                      w-[240px]

                      rounded-full

                      bg-red-500/10

                      blur-[100px]
                    "
                  />

                  {/* CATEGORY */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      relative

                      mb-3

                      text-[11px]
                      font-bold
                      uppercase

                      tracking-[0.25em]

                      text-red-400
                    "
                  >
                    {project.category}
                  </motion.p>

                  {/* TITLE */}

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08,
                    }}
                    className="
                      relative

                      text-2xl
                      font-bold
                      leading-tight

                      text-white

                      sm:text-3xl
                      lg:text-[34px]
                    "
                  >
                    {project.title}
                  </motion.h3>

                  {/* GLOW DIVIDER */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                    className="
                      my-5
                      h-px

                      bg-gradient-to-r

                      from-red-500
                      via-red-500/20
                      to-transparent

                      shadow-[0_0_12px_rgba(239,68,68,0.6)]
                    "
                  />

                  {/* DESCRIPTION */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18,
                    }}
                    className="
                      relative

                      max-w-xl

                      text-sm
                      leading-7

                      text-white/60

                      sm:text-[15px]
                    "
                  >
                    {project.description}
                  </motion.p>

                  {/* TECH STACK */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25,
                    }}
                    className="relative mt-7"
                  >
                    <p
                      className="
                        mb-3

                        text-[11px]
                        font-bold
                        uppercase

                        tracking-[0.18em]

                        text-white/40
                      "
                    >
                      Technologies
                    </p>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full

                            border
                            border-white/[0.08]

                            bg-white/[0.04]

                            px-3
                            py-1.5

                            text-[11px]
                            font-semibold

                            text-white/70

                            transition-all
                            duration-300

                            hover:border-red-500/40
                            hover:bg-red-500/10
                            hover:text-red-300

                            hover:shadow-[0_0_14px_rgba(239,68,68,0.15)]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* BACKGROUND PROJECT NUMBER */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      bottom-[-20px]
                      right-4

                      select-none

                      text-[100px]
                      font-black
                      leading-none

                      text-white/[0.018]

                      sm:text-[120px]
                      lg:text-[140px]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);