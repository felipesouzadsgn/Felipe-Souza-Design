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
import { ServiceOption, Project, WorkflowStep, Testimonial, ExperienceItem, EducationItem } from './types';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  { id: '1', role: 'Freelancer', company: 'UI Design & Web Development', period: '2020 - NOW', description: 'Desenvolvimento de interfaces e sites completos.' },
  { id: '2', role: 'Setimo Studio', company: 'Graphic Design', period: '2020 - NOW', description: 'Design gráfico e identidade visual.' },
  { id: '3', role: 'Company Name', company: 'Description', period: '2020 - NOW', description: 'Descrição da experiência.' },
  { id: '4', role: 'Company Name', company: 'Description', period: '2020 - NOW', description: 'Descrição da experiência.' },
  { id: '5', role: 'Creative Agency', company: 'Web Designer', period: '2019 - 2020', description: 'Design de interfaces web.' },
  { id: '6', role: 'Tech Startup', company: 'Frontend Developer', period: '2018 - 2019', description: 'Desenvolvimento frontend.' },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  { id: '1', degree: 'Kenzie Academy', institution: 'Full Stack Developer', period: '2020 - NOW', description: 'Desenvolvimento Web Full Stack.' },
  { id: '2', degree: 'Rocketseat', institution: 'Description', period: '2020 - NOW', description: 'Cursos de especialização.' },
  { id: '3', degree: 'FrontPUSH', institution: 'Description', period: '2020 - NOW', description: 'Curso avançado de Front-end.' },
  { id: '4', degree: 'Company Name', institution: 'Description', period: '2020 - NOW', description: 'Descrição da formação.' },
  { id: '5', degree: 'Online Course', institution: 'UX/UI Design', period: '2019 - 2020', description: 'Design de interfaces.' },
  { id: '6', degree: 'Bootcamp', institution: 'JavaScript Avançado', period: '2018 - 2019', description: 'Programação avançada.' },
];

export const SERVICES_OPTIONS: ServiceOption[] = [
  { id: 'ui-design', label: 'UI/UX Design', icon: <Layout size={16} /> },
  { id: 'dev', label: 'Web Development', icon: <Code size={16} /> },
  { id: 'app', label: 'Mobile App', icon: <Smartphone size={16} /> },
  { id: 'ai', label: 'Soluções com IA', icon: <Cpu size={16} /> },
  { id: 'consulting', label: 'Consultoria', icon: <MessageSquare size={16} /> },
];

export const PROJECTS: Project[] = [
  {
    id: "neon-bank-app",
    title: "Neon Bank App",
    category: "Fintech / Mobile App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    tags: ["Figma", "React Native", "UX Research"],
    longDescription: "Um aplicativo bancário revolucionário focado na geração Z, com interface dark mode nativa e gamificação de economias. O objetivo foi transformar a experiência bancária monótona em algo engajador e visualmente impactante.",
    features: [
      "Autenticação Biométrica Avançada",
      "Dashboard Financeiro em Tempo Real",
      "Sistema de Gamificação de Poupança",
      "Transferências via Pix com 1 Toque"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4dee46a38531?q=80&w=1470&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "arkitect-studio",
    title: "Arkitect Studio",
    category: "Architecture Portfolio / Web",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
    tags: ["Framer", "Minimalist", "Animation"],
    longDescription: "Portfolio minimalista para um estúdio de arquitetura premiado. O design foca em espaços em branco e tipografia suíça para deixar as obras falarem por si mesmas. Animações sutis guiam o usuário através da narrativa visual.",
    features: [
      "Layout Grid Assimétrico",
      "Transições de Página Suaves (SPA)",
      "Galeria Lightbox Customizada",
      "CMS Integrado para Projetos"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    id: "healthai-dashboard",
    title: "HealthAI Dashboard",
    category: "SaaS / Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "OpenAI API"],
    longDescription: "Dashboard analítico para profissionais de saúde, utilizando IA para prever tendências de pacientes e otimizar diagnósticos. A interface prioriza a legibilidade de dados complexos através de visualizações claras e interativas.",
    features: [
      "Processamento de Linguagem Natural (NLP)",
      "Gráficos Interativos com D3.js",
      "Exportação de Relatórios Automatizada",
      "Conformidade com HIPAA/LGPD"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&w=1470&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
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