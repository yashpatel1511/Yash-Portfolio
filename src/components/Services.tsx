import { memo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/utils/motion";

const Services = () => {
  return (
    <section id="services" className="px-6 py-24 scroll-mt-28 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Services"
          title="What I can build for you"
          description="Frontend services focused on thoughtful implementation, premium visual polish, and reliable delivery."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="group rounded-[20px] border border-white/[0.08] bg-luxury-card p-7 shadow-luxury transition-colors hover:border-red-500/40 hover:shadow-redCard"
            >
              <div className="grid h-16 w-16 place-items-center rounded-[20px] border border-red-500/20 bg-red-500/10 text-red-400 transition group-hover:bg-red-500 group-hover:text-white">
                <Icon className="h-8 w-8" />
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

export default memo(Services);
