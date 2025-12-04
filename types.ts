import { ReactNode } from 'react';

export interface ServiceOption {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
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