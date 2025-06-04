import type { Project } from '@/types/portfolio';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const personalInfo = {
  name: "Ananya M.D.",
  tagline: "Aspiring Software Developer & Creative Thinker",
  bio: [
    "Hello! I'm Ananya, a passionate and driven college student with a keen interest in software development, UI/UX design, and innovative technologies. I thrive on tackling challenging problems and transforming ideas into tangible solutions.",
    "Currently, I'm honing my skills in web development, machine learning, and data science. I'm always eager to learn new things and collaborate on exciting projects. My goal is to leverage technology to create impactful and user-centric experiences.",
    "Outside of academics and coding, I enjoy sketching, exploring new music, and volunteering in my community. Let's connect and create something amazing together!"
  ],
  email: "ananya.md@example.com",
  avatar: "https://placehold.co/200x200.png", // data-ai-hint will be added in component
  resumeUrl: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "EcoSort Waste Classifier",
    description: "A mobile application that uses machine learning to identify and classify waste items, promoting proper recycling habits. Built with React Native and TensorFlow Lite.",
    imageUrl: "https://placehold.co/600x400.png", // data-ai-hint will be added in component
    tags: ["Mobile App", "Machine Learning", "React Native", "Sustainability"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "2",
    title: "StudyBuddy AI Tutor",
    description: "An AI-powered web platform that provides personalized learning assistance to students, featuring adaptive quizzes and concept explanations. Developed using Python (Flask) and Next.js.",
    imageUrl: "https://placehold.co/600x400.png", // data-ai-hint will be added in component
    tags: ["Web App", "AI", "Python", "Next.js", "Education"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "3",
    title: "Community ArtHub",
    description: "A decentralized platform for local artists to showcase and sell their work, built on blockchain technology for secure transactions. Utilized Solidity and IPFS.",
    imageUrl: "https://placehold.co/600x400.png", // data-ai-hint will be added in component
    tags: ["Web3", "Blockchain", "Art", "Community"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "4",
    title: "Portfolio Website v1",
    description: "My first personal portfolio website, showcasing early projects and skills. Built with HTML, CSS, and JavaScript.",
    imageUrl: "https://placehold.co/600x400.png", // data-ai-hint will be added in component
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    sourceLink: "#",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ananya-md",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ananya-md",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ananya_md",
    icon: Twitter,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];
