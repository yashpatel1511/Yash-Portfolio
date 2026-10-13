import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[], offset = 140) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;

          return {
            id,
            top: Math.abs(element.getBoundingClientRect().top - offset),
            isPastTop: element.getBoundingClientRect().top <= offset,
          };
        })
        .filter(Boolean)
        .filter((section) => section?.isPastTop)
        .sort((a, b) => (a?.top ?? 0) - (b?.top ?? 0))[0];

      if (current?.id) {
        setActiveSection(current.id);
      } else {
        setActiveSection(sectionIds[0] ?? "");
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset, sectionIds]);

  return activeSection;
};
