import { PortfolioData } from "./types";

export const personalInfo = {
    name: "Siddhesh Avhad",
    title: "Full-Stack Web Developer",
    location: "Nashik, India",
    email: "siddheshavhad@example.com",
    phone: "9075870716",
    links: {
        linkedin: "https://linkedin.com/in/siddhesh-avhad",
        github: "https://github.com/siddhesh-avhad",
        leetcode: "https://leetcode.com/siddhesh-avhad",
        codechef: "https://www.codechef.com/users/siddhesh_2",
    },
    profile: "Full-Stack Web Developer with hands-on experience in building and deploying scalable web applications using the MERN stack and AWS cloud services. Currently preparing for AWS Certified Solutions Architect– Associate, with practical knowledge of EC2, S3, IAM, VPC, and cloud-based deployment. Strong understanding of REST APIs, authentication, system design, and cloud-ready application architecture.",
};

export const education = [
    {
        id: "edu-1",
        institution: "VIT Bhopal University",
        degree: "B.Tech in CSE Cloud Computing and Automation",
        period: "Sept 2023 – May 2027",
        score: "7.78",
        scoreType: "CGPA",
        order: 1
    },
];

export const skillCategories = [
    {
        id: "cat-1",
        title: "Frontend",
        iconName: "Layout",
        order: 1,
        skills: [
            { id: "s-1", name: "React.js", level: 90 },
            { id: "s-2", name: "HTML5/CSS3", level: 95 },
            { id: "s-3", name: "JavaScript (ES6+)", level: 90 },
            { id: "s-4", name: "WebRTC", level: 80 },
        ],
        color: "purple",
    },
    {
        id: "cat-2",
        title: "Backend",
        iconName: "Server",
        order: 2,
        skills: [
            { id: "s-5", name: "Node.js", level: 85 },
            { id: "s-6", name: "Express.js", level: 85 },
            { id: "s-7", name: "REST APIs", level: 90 },
            { id: "s-8", name: "Microservices", level: 80 },
        ],
        color: "blue",
    },
    {
        id: "cat-3",
        title: "Databases",
        iconName: "Database",
        order: 3,
        skills: [
            { id: "s-9", name: "MongoDB", level: 85 },
            { id: "s-10", name: "MySQL", level: 80 },
        ],
        color: "cyan",
    },
    {
        id: "cat-4",
        title: "Security & Cloud",
        iconName: "Cloud",
        order: 4,
        skills: [
            { id: "s-11", name: "AWS", level: 80 },
            { id: "s-12", name: "Oracle/GCP", level: 75 },
            { id: "s-13", name: "JWT/OAuth 2.0", level: 85 },
        ],
        color: "violet",
    },
];

export const tools = [
    { id: "t-1", name: "Git", iconName: "GitBranch" },
    { id: "t-2", name: "VS Code", iconName: "Code2" },
    { id: "t-3", name: "Figma", iconName: "Palette" },
    { id: "t-4", name: "Docker", iconName: "Cloud" },
    { id: "t-5", name: "Postman", iconName: "Zap" },
];

export const experiences = [
    {
        id: "exp-1",
        title: "Contributor",
        company: "Girl Script Summer of Code-2025",
        period: "July 2025",
        description: "Contributed to open-source web applications by debugging issues, improving code quality, and collaborating in a remote, Git/GitHub-based version-controlled environment.",
        achievements: [
            "Followed software development best practices",
            "Collaborated in a Git/GitHub-based environment",
            "Improved code quality through debugging and reviews",
        ],
        color: "purple",
        order: 1
    },
];

export const projects = [
    {
        id: "proj-1",
        title: "My Dairy",
        subtitle: "Smart Dairy Farm Management System",
        description: "A full-stack web platform designed to help dairy farmers manage cow profiles, milk production, health records, breeding cycles, and sales using cloud and AI-assisted features.",
        tags: ["MERN Stack", "AWS S3", "AI"],
        gradient: "from-purple-500 to-blue-500",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop",
        order: 1
    },
    {
        id: "proj-2",
        title: "MediFlex",
        subtitle: "AI-Assisted Smart Medication System",
        description: "Built an AI-Assisted Smart Medication web application using Flask, TensorFlow (CNN + NLP), and MongoDB to analyze symptoms and recommend medicines with personalized dosage.",
        tags: ["Flask", "TensorFlow", "MongoDB", "AWS EC2", "NLP"],
        gradient: "from-cyan-500 to-blue-500",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000&auto=format&fit=crop",
        order: 2
    },
];

export const certifications = [
    {
        id: "cert-1",
        title: "Oracle- Cloud Infrastructure 2025 Certified Architect Associate",
        period: "July 2025",
        description: "Demonstrated deep understanding of key cloud services including Compute, Networking, Storage, and Identity and Access Management (IAM).",
        order: 1
    },
    {
        id: "cert-2",
        title: "Coursera- Applied Machine Learning in Python",
        period: "Dec 2024",
        description: "Covered essential machine learning techniques using Scikit-learn.",
        order: 2
    },
];

export const achievements = [
    {
        id: "ach-1",
        title: "1st Place - University Hackathon",
        awarder: "VIT Bhopal",
        date: "2024",
        description: "Won first place among 50+ teams for developing a sustainable energy monitoring system.",
        order: 1
    }
];

export const initialData: any = {
    personalInfo,
    education,
    skillCategories,
    tools,
    experiences,
    projects,
    certifications,
    achievements
};
