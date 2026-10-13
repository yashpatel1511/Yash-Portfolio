import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type NavLink = {
  label: string;
  href: string;
  id: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
    hoverColor?: string;
};

export type InfoCard = {
  label: string;
  value: string;
};

export type Skill = {
  name: string;
  icon: IconComponent;
  tone: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

export type ProjectCategory = "All" | "React" | "Typescript" | "MERN" | "JavaScript";

export type Project = {
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, "All">;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  organization: string;
  description: string;
  points: string[];
};

export type EducationItem = {
  date: string;
  title: string;
  institute: string;
  description: string;
  grade:string | number;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: IconComponent;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
};
