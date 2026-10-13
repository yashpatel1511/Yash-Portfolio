import { memo } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { skillGroups } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/utils/motion";

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-16 scroll-mt-28 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader 
          eyebrow="My Skills"
          title="Technologies I work with"
          description="A focused stack for building responsive, maintainable, and visually premium web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeUp}
              className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury transition duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-redCard"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-luxury-muted">{group.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {group.skills.map(({ name, icon: Icon, tone }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -7, scale: 1.05 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group grid aspect-square place-items-center rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-3 text-center transition hover:border-red-500/40 hover:bg-red-500/10 hover:shadow-[0_18px_45px_rgba(239,68,68,0.16)]"
                    title={name}
                  >
                    <div>
                      <Icon className={`mx-auto h-7 w-7 ${tone} transition group-hover:scale-110`} />
                      <p className="mt-3 text-[11px] font-semibold leading-tight text-white/80">{name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
