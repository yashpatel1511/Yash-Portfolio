import { memo } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { education } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="px-6 py-24 scroll-mt-28 lg:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Education"
          title="Education Journey"
          description="A steady academic foundation in computer applications, software systems, and web development."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-red-500 via-red-500/45 to-transparent" />

          <div className="space-y-7">
            {education.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="relative pl-14">
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-red-500/30 bg-[#111111] text-red-400 shadow-[0_0_28px_rgba(239,68,68,0.2)]">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <motion.article
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury transition-colors hover:border-red-500/40 hover:shadow-redCard sm:p-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-red-400">{item.institute}</p>
                    </div>
                    <span className="w-fit rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-300">
                      {item.date}
                    </span>
                    
                  </div>
                  <p className="mt-4 text-sm leading-7 text-luxury-muted">Grade: {item.grade}</p>
                  <p className="mt-4 text-sm leading-7 text-luxury-muted">{item.description}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Education);



