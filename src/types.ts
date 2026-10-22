import { LucideIcon } from "lucide-react";

export type ProjectCategory = 'developer' | 'ai' | 'infrastructure' | 'applications';

export interface Project {
  id: string;
  category: ProjectCategory;
  summary: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  links: {
    code?: string;
    demo?: string;
  };
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}
