import React from 'react';
import { 
  Layout, 
  Code, 
  Smartphone, 
  Cpu, 
  MessageSquare, 
  Figma, 
  Rocket 
} from 'lucide-react';
import { ServiceOption, Project, WorkflowStep, Testimonial } from './types';

export const SERVICES_OPTIONS: ServiceOption[] = [
  { id: 'ui-design', label: 'UI/UX Design', icon: <Layout size={16} /> },
  { id: 'dev', label: 'Web Development', icon: <Code size={16} /> },
  { id: 'app', label: 'Mobile App', icon: <Smartphone size={16} /> },
  { id: 'ai', label: 'Soluções com IA', icon: <Cpu size={16} /> },
  { id: 'consulting', label: 'Consultoria', icon: <MessageSquare size={16} /> },
];

export const PROJECTS: Project[] = [
  {
    title: "Neon Bank App",
    category: "Fintech / Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    tags: ["Figma", "React Native", "UX Research"]
  },
  {
    title: "Arkitect Studio",
    category: "Architecture Portfolio / Web",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
    tags: ["Framer", "Minimalist", "Animation"]
  },
  {
    title: "HealthAI Dashboard",
    category: "SaaS / Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "OpenAI API"]
  }
];

export const WORKFLOW: WorkflowStep[] = [
  { icon: <MessageSquare size={24} />, step: "01", title: "Discovery", desc: "Briefing detalhado para alinhar objetivos e visão." },
  { icon: <Figma size={24} />, step: "02", title: "Design & UX", desc: "Prototipagem de alta fidelidade visual antes do código." },
  { icon: <Code size={24} />, step: "03", title: "Development", desc: "Código limpo, animações fluidas e integração de APIs." },
  { icon: <Rocket size={24} />, step: "04", title: "Launch", desc: "Testes, SEO e deploy para escalar seu negócio." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "O Felipe conseguiu traduzir nossa visão complexa em uma interface simples e poderosa. A entrega foi muito rápida.",
    author: "Ricardo M.",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "Contratar um profissional que faz design e código mudou o jogo. A comunicação foi perfeita e o resultado pixel-perfect.",
    author: "Amanda S.",
    role: "Marketing Dir., Aura Beauty",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/felipesouzadsgn",
  linkedin: "https://linkedin.com/in/felipesouzadsgn",
  github: "https://github.com",
  whatsapp: "5513996432357",
  email: "felipesouzadsgn@gmail.com"
};

// Image representing the Robot/AI Agent
export const AGENT_BG_IMAGE = "https://images.unsplash.com/photo-1535378437323-95288ac8e65e?q=80&w=2070&auto=format&fit=crop";