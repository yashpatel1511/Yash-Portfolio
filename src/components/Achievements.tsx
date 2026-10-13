import { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { achievements } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/utils/motion";

const Achievements = () => {
  return (
    <section id="achievements" className="px-6 py-24 scroll-mt-28 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones & Highlights"
          description="The details that show consistency, discipline, and a growing craft in frontend engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {achievements.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury transition-colors hover:border-red-500/40 hover:bg-[#151515] hover:shadow-redCard"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_0_28px_rgba(239,68,68,0.14)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-7 text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-luxury-muted">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Achievements);
