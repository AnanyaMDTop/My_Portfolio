import type { Project } from '@/types/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

export const personalInfo = {
  name: "Ananya M.D.",
  tagline: "Aspiring Software Developer & Creative Thinker",
  bio: [
    "Hello! I'm Ananya, a passionate and driven college student with a keen interest in software development, UI/UX design, and innovative technologies. I thrive on tackling challenging problems and transforming ideas into tangible solutions.",
    "Currently, I'm honing my skills in web development, machine learning, and data science. I'm always eager to learn new things and collaborate on exciting projects. My goal is to leverage technology to create impactful and user-centric experiences.",
    "Outside of academics and coding, I enjoy sketching, exploring new music, and volunteering in my community. Let's connect and create something amazing together!"
  ],
  email: "ananyamaniyana@gmail.com",
  avatar: "/Ananya.jpg",
  resumeUrl: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Book My Show App",
    description: "A web application for browsing and booking movie tickets, similar to BookMyShow.",
    imageUrl: "/irrigation.jfif",
    tags: ["Web App", "React", "Node.js", "Booking System"],
    liveLink: "#",
    sourceLink: "https://github.com/AnanyaMDTop/BookMyShow020",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AnanyaMDTop",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ananya-m-d-b7a13a293/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];
