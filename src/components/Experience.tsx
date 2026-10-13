import { memo } from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/data/portfolio";
import { fadeUp } from "@/utils/motion";

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 scroll-mt-28 lg:py-5 ">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
          description="A concise view of practical frontend work, project delivery, and continued technical growth."
        />

        <div className="relative mx-0 max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-red-500 via-red-500/45 to-transparent lg:left-[220px]" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="relative">
                <div className="grid gap-6 pl-14 lg:grid-cols-[180px_1fr] lg:pl-0">
                  <div className="pt-2 lg:text-right">
                    <p className="text-sm font-bold text-red-400">{item.date}</p>
                  </div>

                  {/* <span className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border border-red-500/30 bg-[#111111] text-red-400 shadow-[0_0_28px_rgba(239,68,68,0.22)] lg:left-[200px]">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </span> */}

                  <motion.article
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="rounded-[20px] border border-white/[0.08] bg-luxury-card p-6 shadow-luxury transition-colors hover:border-red-500/40 hover:shadow-redCard sm:p-7"
                  >
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-red-400">{item.organization}</p>
                    <p className="mt-4 text-sm leading-7 text-luxury-muted">{item.description}</p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-7 text-white/75">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.85)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
