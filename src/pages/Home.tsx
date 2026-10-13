import { memo } from "react";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { useSEO } from "@/hooks/useSEO";

const Home = () => {
  useSEO(
    "Yash Patel | Frontend Developer",
    "Premium developer portfolio for Yash Patel, a frontend developer from Gujarat, India specializing in React, TypeScript, and Tailwind CSS.",
    "/portfolio-preview.svg",
  );

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Services />
      <Contact />
    </>
  );
};

export default memo(Home);
