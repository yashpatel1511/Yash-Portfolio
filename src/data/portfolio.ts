import {
  FaBootstrap,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiEslint,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2, Github, Linkedin, Mail, MapPin, Medal, Phone, Sparkles, Star, Trophy } from "lucide-react";
import portrait from "@/assets/images/portrait.svg";
import carviaImage from "@/assets/images/Carvia.jpg";
import portfolioImage from "@/assets/images/portfolio.png";
import taskManagerImage from "@/assets/images/Taskmint.jpg";
import laneri from "@/assets/images/Laneri.png";
import Kothari from "@/assets/images/Kothari.png";
import { SITE } from "@/constants";
import type {
  ContactItem,
  EducationItem,
  FeatureCard,
  InfoCard,
  Project,
  SkillGroup,
  SocialLink,
  TimelineItem,
} from "@/types/portfolio";


export const images = {
  portrait,
};


export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yashpatel", icon: FaGithub, hoverColor: "hover:text-gray-400 hover:border-gray-400" },
  { label: "LinkedIn", href: "https://www.linkedin.com/yashpatel", icon: FaLinkedinIn, hoverColor: "hover:text-blue-400 hover:border-blue-400" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram, hoverColor: "hover:text-pink-400 hover:border-pink-400" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FaEnvelope, hoverColor: "hover:text-red-500 hover:border-red-500" },
  { label: "WhatsApp", href: "https://wa.me/91 8320631943", icon: FaWhatsapp, hoverColor: "hover:text-green-500 hover:border-green-500" },
];


export const aboutInfo: InfoCard[] = [
  { label: "Name", value: SITE.name },
  { label: "Degree", value: SITE.degree },
  { label: "Languages", value: "English, Hindi, Gujarati" },
];

export const heroStats = [
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Technologies", value: 8, suffix: "+" },
  { label: "Responsive", value: 100, suffix: "%" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Modern interfaces, interactions, and component systems.",
    skills: [
      { name: "HTML", icon: FaHtml5, tone: "text-orange-400" },
      { name: "CSS", icon: FaCss3Alt, tone: "text-sky-400" },
      { name: "JavaScript", icon: SiJavascript, tone: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, tone: "text-blue-400" },
      { name: "React", icon: FaReact, tone: "text-cyan-300" },
      // { name: "Next.js", icon: SiNextdotjs, tone: "text-white" },
      { name: "Tailwind", icon: SiTailwindcss, tone: "text-cyan-300" },
      { name: "Bootstrap", icon: FaBootstrap, tone: "text-purple-300" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, server logic, and database-driven products.",
    skills: [
      { name: "Node.js", icon: FaNodeJs, tone: "text-green-400" },
      { name: "Express.js", icon: SiExpress, tone: "text-white" },
      { name: "MongoDB", icon: SiMongodb, tone: "text-emerald-400" },
    ],
  },
  {
    title: "Tools & Others",
    description: "Daily development workflow, debugging, and delivery.",
    skills: [
      { name: "Git", icon: Github, tone: "text-red-400" },
      { name: "GitHub", icon: FaGithub, tone: "text-white" },
      { name: "VS Code", icon: VscVscode, tone: "text-sky-400" },
      { name: "Postman", icon: SiPostman, tone: "text-orange-400" },
      // { name: "Vercel", icon: SiVercel, tone: "text-white" },
      { name: "ESLint", icon: SiEslint, tone: "text-indigo-300" },
    ],
  },
];

export const projects: Project[] = [
  {
   title: "Lanari Slik Saree",
   description:
     "A primium and elegent saree e-commerce website designed to showcase traditional saree collections.The website focuses on luxuious visual experience,easy product discovery,responsive design, and a smooth shopping interface.  ",
   image: laneri,
   category: "MERN",
   techStack: ["React.js", "TypeScript", "Framer Motion", "Tailwind"],
   githubUrl: "https://github.com/",
   liveUrl: "https://example.com/",
 },
  {
   title: "Kothari Jewellarys",
   description:
       "A premium jewellary website designed with a sophisticated luxury aesthics to showcase jewellary collations.",
   image: Kothari,
   category: "MERN",
   techStack: ["React.js", "TypeScript", "Framer Motion", "Tailwind"],
   githubUrl: "https://github.com/",
   liveUrl: "https://example.com/",
 },
  {
    title: "Carvia",
    description:
      "A premium automotive marketplace interface with curated listings, rich filtering, and conversion-focused vehicle detail pages.",
    image: carviaImage,
    category: "MERN",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Task Manager",
    description:
      "A productivity dashboard for organizing tasks, tracking progress, filtering priorities, and moving work across stages.",
    image: taskManagerImage,
    category: "React",
    techStack: ["React", "TypeScript", "Tailwind", "Local Storage"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    title: "Portfolio",
    description:
      "A modern developer portfolio system with dark luxury styling, motion, responsive sections, and reusable content data.",
    image: portfolioImage,
    category: "Typescript",
    techStack: ["React.js", "TypeScript", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  
];

export const experiences: TimelineItem[] = [
  {
    date: "Jan- Apr 2026 ",
    title: "Marn Stack Developer ",
    organization: "Wappzo infotech",
    description:
      "Designing and building responsive web products with React, TypeScript, Tailwind CSS, and modern animation systems.",
    points: [
      "Built component-driven interfaces with reusable design patterns.",
      "Improved usability through responsive layouts and accessible interactions.",
      "Integrated APIs, forms, routing, and client-side state for production-ready experiences.",
    ],
  },
  
];

export const education: EducationItem[] = [
  {
    date: "2024 - 2026",
    title: "Master of Computer Applications (MCA)",
    institute: "Gujarat Technological University,Gujarat, India",
    description: "Focused on Marn Stack development, Software engineering, Modern web technologies, and Morden web application.",
    grade:"8.00 CGPA",
  },
  {
    date: "2021 - 2024",
    title: "Bachelor of Science (Bsc)",
    institute: "Veer Narmad South Gujarat University,,Gujarat, India",
    description: "Built a strong foundation in physic, mathematics, analytics thinking, and problem-solving skills.",
    grade: "6.00 CGPA",
  },
  {
    date: "2020 - 2021",
    title: "12th Standard",
    institute:"Gujarat Secondary and Higher Secondary Education Board,Gujarat, India",
    description: "Completed higher secondary education in Science with a focus on Physic, Mathsematics, and Chemistry.",
    grade: "70%",
  },
];

export const achievements: FeatureCard[] = [
  {
    title: "Project Excellence",
    description: "Built polished academic and personal projects with clean UI, responsive behavior, and maintainable code.",
    icon: Trophy,
  },
  {
    title: "Consistent Learning",
    description: "Completed hands-on learning across React, TypeScript, Tailwind CSS, APIs, and full-stack workflows.",
    icon: Medal,
  },
  {
    title: "Clean Code Practice",
    description: "Focuses on reusable components, typed data, accessible markup, and organized project structure.",
    icon: Code2,
  },
  {
    title: "UI Detail Focus",
    description: "Translates references into refined interfaces with spacing, hierarchy, animation, and visual balance.",
    icon: Star,
  },
];

export const services: FeatureCard[] = [
  {
    title: "Frontend Development",
    description: "High-quality web interfaces built with semantic structure, fast rendering, and responsive layouts.",
    icon: Code2,
  },
  {
    title: "React Development",
    description: "Reusable React components, routing, state-aware UI, and TypeScript-first implementation.",
    icon: FaReact,
  },
  {
    title: "Responsive Design",
    description: "Pixel-conscious layouts that adapt cleanly across desktop, laptop, tablet, and mobile screens.",
    icon: Sparkles,
  },
  {
    title: "UI Implementation",
    description: "Premium Tailwind CSS interfaces translated from references with careful spacing and interaction states.",
    icon: Medal,
  },
];

export const contactItems: ContactItem[] = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, icon: Mail },
  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "Location", value: SITE.location, href: "https://maps.google.com/?q=Gujarat%2C%20India", icon: MapPin },
  // { label: "LinkedIn", value: "yashpatel", href: "https://www.linkedin.com/yashpatel", icon: Linkedin },
  // { label: "GitHub", value: "yashpatel", href: "https://github.com/yashpatel", icon: Github },
];
