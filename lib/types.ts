import { ReactNode } from 'react';

export interface ServiceOption {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  longDescription: string;
  gallery: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface WorkflowStep {
  icon: ReactNode;
  step: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}