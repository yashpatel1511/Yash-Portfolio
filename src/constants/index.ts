import type { NavLink, ProjectCategory } from "@/types/portfolio";
import { icons } from "lucide-react";


export const SITE = {
  name: "Yash Patel",
  role: "Frontend Developer",
  degree: "Master of Computer Applications (MCA)",
  location: "Navsari,Gujarat,India,396436",
  email: "ympatel001@gmail.com",
  phone: "+91 83206 31943",
  resumeUrl: "/YASHFRONTEND.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const projectCategories: ProjectCategory[] = ["All", "React", "Typescript", "MERN",];

export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};


