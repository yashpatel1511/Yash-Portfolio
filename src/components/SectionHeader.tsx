import { memo } from "react";
import Reveal from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ eyebrow, title, description, align = "center" }: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto mb-14 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      <span className="mb-4 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold leading-tight text-red-700 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className={centered ? "mx-auto mt-5 max-w-2xl text-base leading-8 text-luxury-muted" : "mt-5 text-base leading-8 text-luxury-muted"}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export default memo(SectionHeader);
