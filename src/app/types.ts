export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    links: Record<string, string>;
    profile: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    score: string;
    scoreType: 'CGPA' | 'Percentage';
    order: number;
}

export interface Skill {
    id: string;
    name: string;
    level: number;
}

export interface SkillCategory {
    id: string;
    title: string;
    iconName: string;
    skills: Skill[];
    color: string;
    order: number;
}

export interface Tool {
    id: string;
    name: string;
    iconName: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    color: string;
    order: number;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    gradient: string;
    link: string;
    github: string;
    image: string;
    order: number;
}

export interface Certification {
    id: string;
    title: string;
    period: string;
    description: string;
    order: number;
}

export interface Achievement {
    id: string;
    title: string;
    awarder: string;
    date: string;
    description: string;
    order: number;
}

export interface PortfolioData {
    personalInfo: PersonalInfo;
    education: Education[];
    skillCategories: SkillCategory[];
    tools: Tool[];
    experiences: Experience[];
    projects: Project[];
    certifications: Certification[];
    achievements: Achievement[];
    messages: Message[];
}

export interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: string;
    read: boolean;
}
