import { PortfolioData } from "./types";

export const personalInfo = {
    name: "Siddhesh Avhad",
    title: "Software Developer | Cloud Computing & Automation | Full Stack Developer",
    tagline: "Full‑Stack Developer • MERN • Spring Boot • FastAPI • AWS • Docker",
    location: "Nashik, India",
    email: "siddhesh111avhad@gmail.com",
    phone: "9075870716",
    links: {
        linkedin: "https://linkedin.com/in/siddhesh2709",
        github: "https://github.com/siddhesh2709",
        leetcode: "https://leetcode.com/siddhesh-avhad",
        codechef: "https://www.codechef.com/users/siddhesh_2",
    },
    profile:
        "Full-Stack Software Developer with hands-on experience in the MERN stack, Spring Boot, FastAPI, and AWS cloud services. Cloud Computing and Automation undergraduate skilled in designing, building, and deploying scalable, secure web applications and REST APIs using Docker and DevOps best practices.",
    avatar: "/avatar/siddhesh-avhad.jpg",
};

export const education = [
    {
        id: "edu-1",
        institution: "Vellore Institute of Technology",
        degree: "B.Tech in Computer Science and Engineering (Cloud Computing and Automation)",
        period: "Sept 2023 – May 2027",
        score: "",
        scoreType: "",
        order: 1
    },
    {
        id: "edu-2",
        institution: "Matoshri Aasarabai Darade English Medium School & Junior College",
        degree: "Higher Secondary Education (HSC)",
        period: "May 2021 – Mar 2023",
        score: "73.17",
        scoreType: "Percentage",
        order: 2
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
            { id: "s-3b", name: "TypeScript", level: 80 },
            { id: "s-4", name: "Tailwind CSS", level: 88 },
            { id: "s-4b", name: "Vite", level: 82 },
        ],
        color: "orange",
    },
    {
        id: "cat-2",
        title: "Backend",
        iconName: "Server",
        order: 2,
        skills: [
            { id: "s-5", name: "Node.js", level: 85 },
            { id: "s-6", name: "Express.js", level: 85 },
            { id: "s-6b", name: "Spring Boot", level: 78 },
            { id: "s-6c", name: "FastAPI", level: 82 },
            { id: "s-7", name: "REST APIs", level: 90 },
            { id: "s-7b", name: "JWT Authentication", level: 85 },
            { id: "s-8", name: "MVC Architecture", level: 80 },
        ],
        color: "orange",
    },
    {
        id: "cat-3",
        title: "Databases",
        iconName: "Database",
        order: 3,
        skills: [
            { id: "s-9", name: "MongoDB", level: 85 },
            { id: "s-10", name: "MySQL", level: 80 },
            { id: "s-11", name: "PostgreSQL", level: 78 },
            { id: "s-12", name: "Redis", level: 72 },
        ],
        color: "orange",
    },
    {
        id: "cat-4",
        title: "Cloud & DevOps",
        iconName: "Cloud",
        order: 4,
        skills: [
            { id: "s-13", name: "AWS (EC2, S3, IAM, VPC)", level: 80 },
            { id: "s-13b", name: "Docker", level: 78 },
            { id: "s-13c", name: "CI/CD", level: 72 },
            { id: "s-13d", name: "Git & GitHub", level: 90 },
            { id: "s-13e", name: "Oracle Cloud", level: 70 },
        ],
        color: "orange",
    },
    {
        id: "cat-5",
        title: "Core CS",
        iconName: "Cpu",
        order: 5,
        skills: [
            { id: "c-1", name: "Data Structures & Algorithms", level: 82 },
            { id: "c-2", name: "Object-Oriented Programming", level: 88 },
            { id: "c-3", name: "DBMS", level: 80 },
            { id: "c-4", name: "Operating Systems", level: 75 },
            { id: "c-5", name: "Computer Networks", level: 74 },
        ],
        color: "orange",
    },
];

export const tools = [
    { id: "t-1", name: "Git", iconName: "GitBranch" },
    { id: "t-2", name: "VS Code", iconName: "Code2" },
    { id: "t-3", name: "Docker", iconName: "Cloud" },
    { id: "t-4", name: "Postman", iconName: "Zap" },
    { id: "t-5", name: "Linux", iconName: "Cpu" },
    { id: "t-6", name: "Supabase", iconName: "Database" },
];

export const experiences = [
    {
        id: "exp-1",
        title: "Advanced Software Engineering & Development Intern + AI/ML Intern",
        company: "MPOnline Limited",
        period: "May 20, 2026 – July 31, 2026",
        description:
            "Completed a dual internship at MPOnline Limited covering Advanced Software Engineering & Development and AI/ML. Gained practical exposure to AI/ML concepts, applied techniques in a professional environment, and strengthened technical and problem-solving skills.",
        achievements: [
            "Completed Advanced Software Engineering & Development Internship, enhancing software engineering skills",
            "Completed AI/ML Internship, gaining practical exposure to Artificial Intelligence and Machine Learning concepts",
            "Applied AI/ML techniques in a professional environment",
            "Strengthened programming and problem-solving abilities through hands-on experience",
            "Demonstrated commitment to continuous learning and professional growth",
        ],
        color: "orange",
        order: 1
    },
    {
        id: "exp-2",
        title: "Software Development Engineer Intern (SDE-1)",
        company: "ScalePBG",
        period: "Feb 2026 – June 2026",
        description:
            "Engineered responsive React.js and Vite interfaces for an AI-powered career roadmap platform. Co-developed a SaaS platform leveraging GPT-4 to generate personalized learning roadmaps and recommendations for BTech students.",
        achievements: [
            "Engineered responsive React.js and Vite interfaces for an AI-powered career roadmap platform, enabling engineering students to visualize and track personalized learning paths in real time",
            "Redesigned Dashboard, Home, and Roadmap modules with mobile-first responsive layouts, improving cross-device usability",
            "Streamlined authentication and data flow by integrating Supabase authentication with FastAPI REST APIs via Axios",
            "Developed scalable backend services using FastAPI, enhancing system performance and reliability",
            "Collaborated with cross-functional teams to ensure seamless integration and deployment of innovative solutions",
        ],
        color: "orange",
        order: 2
    },
    {
        id: "exp-3",
        title: "Open Source Contributor",
        company: "GirlScript Summer of Code",
        period: "July 2025 – September 2025",
        description:
            "Contributed to various open-source projects by fixing bugs, implementing new features, and enhancing project documentation to improve usability and accessibility for users.",
        achievements: [
            "Contributed to various open-source projects by fixing bugs and implementing new features",
            "Enhanced project documentation to improve usability and accessibility for users",
            "Collaborated effectively with project maintainers and contributors using Git and GitHub",
        ],
        color: "orange",
        order: 3
    },
];

export const projects = [
    {
        id: "proj-1",
        title: "My Dairy",
        subtitle: "Smart Dairy Farm Management System",
        description:
            "A full-stack dairy farm management platform to digitize cattle records, health tracking, milk production, and farm operations based on real-world dairy management challenges.",
        problemStatement:
            "Dairy farms needed a centralized, digital system to track cattle lifecycle and operational records with secure, reliable access to documents and images.",
        architecture:
            "React.js + Node.js/Express.js REST APIs with Firebase authentication, AWS S3 presigned URLs for secure media management, and i18next for multilingual support.",
        challenges:
            "Structuring farm records cleanly across modules while keeping media storage secure and organized with presigned URL-based uploads.",
        optimizations:
            "Implemented secure S3 presigned URL uploads, reducing backend processing overhead and keeping documents accessible and safe.",
        tags: ["React.js", "Node.js", "Express.js", "Firebase", "AWS S3", "Tailwind CSS", "i18next"],
        gradient: "from-violet-600 to-indigo-600",
        link: "#",
        github: "https://github.com/siddhesh2709",
        image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop",
        order: 1
    },
    {
        id: "proj-2",
        title: "AgroLyft",
        subtitle: "AI-Driven Digital Farming Platform",
        description:
            "A full-stack smart agriculture platform to help farmers monitor crops, access weather insights, manage farm data, and connect through a community platform.",
        problemStatement:
            "Farmers lacked a centralized platform for crop monitoring, weather insights, and community knowledge-sharing, leading to inefficient farm decisions.",
        architecture:
            "React.js + TypeScript frontend with Node.js/Express.js REST APIs, PostgreSQL and MongoDB databases, Redis for caching, and AWS S3 for media storage.",
        challenges:
            "Managing multiple data sources (weather API, farm data, community posts) efficiently and providing fast response times across features.",
        optimizations:
            "Integrated Redis for weather-data caching and session management, reducing API response time and improving application performance by minimizing repeated weather API calls.",
        tags: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "AWS S3", "Tailwind CSS"],
        gradient: "from-green-600 to-emerald-500",
        link: "#",
        github: "https://github.com/siddhesh2709",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
        order: 2
    },
    {
        id: "proj-3",
        title: "MediVerse",
        subtitle: "AI-Powered Smart Healthcare Ecosystem",
        description:
            "A full-stack AI-powered healthcare platform enabling appointment booking, electronic medical records, AI chatbot assistance, and JWT-based authentication.",
        problemStatement:
            "Patients and healthcare providers needed a unified digital platform for appointment management, medical records, and AI-assisted health guidance.",
        architecture:
            "React.js frontend with Node.js/Express.js APIs, FastAPI for AI services, PostgreSQL for relational healthcare data, AWS S3 for medical document storage, and Docker Compose for multi-service orchestration.",
        challenges:
            "Orchestrating multiple services (Node.js, FastAPI, PostgreSQL) seamlessly with consistent environments across development and production.",
        optimizations:
            "Containerized the multi-service application using Docker and Docker Compose, enabling consistent environments, simplified service integration, and easier deployment.",
        tags: ["React.js", "Node.js", "Express.js", "FastAPI", "PostgreSQL", "AWS S3", "Docker", "JWT", "Tailwind CSS"],
        gradient: "from-sky-600 to-cyan-500",
        link: "#",
        github: "https://github.com/siddhesh2709",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000&auto=format&fit=crop",
        order: 3
    },
    {
        id: "proj-4",
        title: "PlacePredict",
        subtitle: "Machine Learning Model",
        description: "A machine learning model for predicting student placements based on academic and extracurricular metrics.",
        tags: ["Python", "Machine Learning"],
        gradient: "from-blue-600 to-indigo-500",
        github: "https://github.com/siddhesh2709/PlacePredict",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        order: 4
    },
    {
        id: "proj-5",
        title: "Smart-Expense-Tracker",
        subtitle: "Personal Finance Manager",
        description: "An intelligent application to track, analyze, and manage personal expenses effectively.",
        tags: ["Python", "Data Analysis"],
        gradient: "from-emerald-600 to-teal-500",
        github: "https://github.com/siddhesh2709/Smart-Expense-Tracker",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
        order: 5
    },
    {
        id: "proj-6",
        title: "MeetMind AI",
        subtitle: "AI-Powered Meeting Summarizer",
        description: "An AI-powered tool that automatically turns raw audio recordings into structured, actionable meeting notes.",
        tags: ["Python", "AI", "Audio Processing"],
        gradient: "from-purple-600 to-pink-500",
        github: "https://github.com/siddhesh2709/MeetMind",
        image: "https://images.unsplash.com/photo-1588196749597-9ff0464b83cb?q=80&w=1000&auto=format&fit=crop",
        order: 6
    },
    {
        id: "proj-7",
        title: "Vertex",
        subtitle: "Smart Farm Management System",
        description: "A comprehensive digital solution for modern farm management.",
        tags: ["TypeScript", "React"],
        gradient: "from-green-600 to-emerald-600",
        github: "https://github.com/siddhesh2709/Vertex",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
        order: 7
    },
    {
        id: "proj-8",
        title: "Truckify",
        subtitle: "Logistics Platform",
        description: "Connects truck owners with customers for on-demand goods transportation, offering location-based search and dynamic pricing.",
        tags: ["JavaScript", "Logistics"],
        gradient: "from-yellow-600 to-orange-500",
        github: "https://github.com/siddhesh2709/Truckify",
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c82631?q=80&w=1000&auto=format&fit=crop",
        order: 8
    },
    {
        id: "proj-9",
        title: "Storybook",
        subtitle: "Data Grid Component",
        description: "A production-grade, virtualized, and accessible Data Grid component built with React 18 and Tailwind CSS.",
        tags: ["React 18", "TypeScript", "Tailwind CSS"],
        gradient: "from-pink-600 to-rose-500",
        github: "https://github.com/siddhesh2709/Storybook",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        order: 9
    },
    {
        id: "proj-10",
        title: "VerctorShift",
        subtitle: "End-to-End AI Automations Platform",
        description: "A platform for building and managing end-to-end AI automations.",
        tags: ["JavaScript", "AI"],
        gradient: "from-indigo-600 to-blue-600",
        github: "https://github.com/siddhesh2709/VerctorShift",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        order: 10
    },
    {
        id: "proj-11",
        title: "ChemEquip-Analytics",
        subtitle: "Chemical Equipment Data Analysis API",
        description: "A FastAPI-based backend that analyzes chemical equipment CSV data and returns key statistical insights through a secure REST API.",
        tags: ["FastAPI", "Python", "REST API"],
        gradient: "from-cyan-600 to-teal-500",
        github: "https://github.com/siddhesh2709/ChemEquip-Analytics",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
        order: 11
    },
    {
        id: "proj-12",
        title: "MediFlex",
        subtitle: "Intelligent Medicine Recommendations",
        description: "AI-Powered Healthcare Solution for providing intelligent medicine recommendations.",
        tags: ["HTML", "AI", "Healthcare"],
        gradient: "from-rose-500 to-red-500",
        github: "https://github.com/siddhesh2709/MediFlex",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
        order: 12
    },
    {
        id: "proj-13",
        title: "Farmsmart-AI",
        subtitle: "AI-Driven Agricultural Solutions",
        description: "Empowering Small and Marginal Farmers with AI-Driven Agricultural Solutions.",
        tags: ["TypeScript", "AI"],
        gradient: "from-lime-600 to-green-500",
        github: "https://github.com/siddhesh2709/Farmsmart-AI",
        image: "https://images.unsplash.com/photo-1592982537447-6f23349c8ba2?q=80&w=1000&auto=format&fit=crop",
        order: 13
    }
];

export const certifications = [
    // ── RECENT / MAJOR CERTS (with photos) ──────────────────────────────────
    {
        id: "cert-1",
        title: "Advanced Software Engineering & Development Internship",
        issuer: "MPOnline Limited",
        period: "May 20 – July 31, 2026",
        image: "/certificates/cert-mpoonline-swe.jpg",
        description:
            "Certificate of Completion issued by MPOnline Limited (ISO & CMMI ML3 Certified). Demonstrated professionalism, commitment, and a willingness to learn. Certificate ID: MPO/INT/26-27/07/1908/26051912.",
        order: 1
    },
    {
        id: "cert-2",
        title: "AI/ML Internship",
        issuer: "MPOnline Limited",
        period: "May 20 – July 31, 2026",
        image: "/certificates/cert-mpoonline-aiml.jpg",
        description:
            "Certificate of Completion for AI/ML Internship issued by MPOnline Limited (ISO & CMMI ML3 Certified). Certificate ID: MPO/INT/26-27/07/538/26050542.",
        order: 2
    },
    {
        id: "cert-3",
        title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
        issuer: "Oracle University",
        period: "Aug 26, 2025",
        image: "/certificates/cert-oracle-architect.jpg",
        description:
            "Oracle Certified Associate. Expertise in OCI architecture, Compute, Networking, Storage, and IAM. Valid until Aug 26, 2027. Certificate ID: 321933082OCI25CAA.",
        order: 3
    },
    {
        id: "cert-4",
        title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        issuer: "Oracle University",
        period: "Aug 25, 2025",
        image: "/certificates/cert-oracle-foundations.jpg",
        description:
            "Oracle Certified Foundations Associate. Covers foundational OCI concepts including core cloud services. Certificate ID: 102424347OCI25FNDCFA.",
        order: 4
    },
    {
        id: "cert-5",
        title: "Getting Started with AWS Cloud Essentials",
        issuer: "Amazon Web Services Training & Certification",
        period: "Sep 22, 2025",
        image: "/certificates/cert-aws-essentials.jpg",
        description:
            "AWS Completion Certificate covering foundational cloud concepts, core AWS services, and cloud computing essentials.",
        order: 5
    },
    {
        id: "cert-6",
        title: "Google IT Support Certificate",
        issuer: "Google Career Certificates",
        period: "01 Feb 2026",
        image: "/certificates/cert-google-it-support.jpg",
        badge: "/certificates/badge-google-it-support.png",
        description:
            "Google IT Support Certificate covering IT fundamentals, networking, OS administration, and IT security. Verify: credly.com/go/3odGHl0x",
        order: 6
    },
    // ── NEWER CERTS (with photos) ────────────────────────────────────────────
    {
        id: "cert-7",
        title: "Introduction To Internet Of Things",
        issuer: "Indian Institute of Technology, Kharagpur (NPTEL)",
        period: "Jan – Apr 2025",
        image: "/certificates/cert-nptel-iot.png",
        description:
            "Elite NPTEL Online Certification — 12-week course. Score: 75% (Assignments: 24.35/25, Proctored: 50.5/75). Funded by MoE, Govt. of India. Credential ID: NPTEL25CS44S353500524.",
        order: 7
    },
    {
        id: "cert-8",
        title: "Generative AI — What Is Generative AI?",
        issuer: "LinkedIn Learning",
        period: "Mar 29, 2025",
        image: "/certificates/cert-genai-linkedin.png",
        description:
            "Covers Generative AI Tools, Artificial Intelligence, and Generative AI models. Credential ID: 356f3e22f109ce6779072f5d0d2de94ba5244733d0a6bfc3396ce8181abbcb8b.",
        order: 8
    },
    {
        id: "cert-9",
        title: "Ethics in the Age of Generative AI",
        issuer: "LinkedIn Learning / Project Management Institute",
        period: "Mar 27, 2025",
        image: "/certificates/cert-ethics-genai.png",
        description:
            "Covers computer ethics, responsible AI practices, bias mitigation, and ethical deployment of AI. Credential ID: f6e513c816d2a26fcf9c4fa54e5bf345f9a0857dc59225cbd579317355595538.",
        order: 9
    },
    {
        id: "cert-10",
        title: "Git & GitHub Bootcamp",
        issuer: "LetsUpgrade (NSDC, ITM, GDG MAD)",
        period: "Mar 3–5, 2025 (Issued Mar 28, 2025)",
        image: "/certificates/cert-git-github-letsupgrade.png",
        description:
            "Hands-on bootcamp on Git version control, repository management, branching, and collaborative GitHub workflows. Certificate No: LUEGGMAR1251980.",
        order: 10
    },
    {
        id: "cert-11",
        title: "Full Stack Web Development (Delta)",
        issuer: "Apna College",
        period: "Mar 2025",
        image: "/certificates/cert-apna-college-fullstack.png",
        description:
            "Delta Full Stack program covering React, JavaScript, Node.js, MongoDB, CSS, HTML, and deployment. Credential ID: 67e59f4fda3a8f34c209a0c4.",
        order: 11
    },
    // ── OLDER CERTS (text only, newest to oldest) ────────────────────────────
    {
        id: "cert-12",
        title: "CSS, Bootstrap, JavaScript & PHP Stack",
        issuer: "Udemy",
        period: "Feb 2025",
        image: "/certificates/cert-udemy-phpstack.jpg",
        description:
            "Covers responsive web design with CSS and Bootstrap, JavaScript scripting, and backend development with PHP. Credential ID: UC_f2c79b8c-8444-47f3-bb61-cb5c1bc6342d.",
        order: 12
    },
    {
        id: "cert-13",
        title: "HTML & CSS",
        issuer: "Udemy",
        period: "Feb 2025",
        description:
            "Mastered HTML5 and CSS3 fundamentals, web page structure, styling, and responsive design. Credential ID: UC-bfeaaf18-043e-4919-a9a6-7e2df426ae4e.",
        order: 13
    },
    {
        id: "cert-14",
        title: "Applied Machine Learning in Python",
        issuer: "University of Michigan (via Coursera)",
        period: "Dec 2024",
        description:
            "Supervised and unsupervised ML using scikit-learn, feature engineering, and model evaluation. Credential ID: E1XDHZUIVJNJ.",
        order: 14
    },
    {
        id: "cert-15",
        title: "AWS Skill Builder — Cloud Computing Learner Guide",
        issuer: "Amazon Web Services (AWS)",
        period: "Nov 2024",
        description:
            "AWS Skill Builder training covering cloud computing, core AWS services, cloud security, and scalable cloud architecture best practices.",
        order: 15
    },
    {
        id: "cert-16",
        title: "Java Basic",
        issuer: "HackerRank",
        period: "Nov 2024",
        image: "/certificates/cert-hackerrank-java.jpg",
        description:
            "Core Java concepts — variables, loops, functions, OOP principles, and problem solving. Credential ID: 2c9f6434fc4f.",
        order: 16
    },
    {
        id: "cert-17",
        title: "Practical MongoDB + PHP",
        issuer: "Udemy",
        period: "Mar 2025",
        image: "/certificates/cert-udemy-mongodb.jpg",
        description:
            "NoSQL database management, CRUD operations, and backend application development with MongoDB and PHP. Credential ID: UC_75838f51-ff08-42d0-b563-dc600d10ac0d.",
        order: 17
    },
    {
        id: "cert-18",
        title: "Fundamentals of AI & Machine Learning",
        issuer: "Vityarthi",
        period: "May 2024",
        image: "/certificates/cert-vityarthi-aiml.jpg",
        description:
            "Supervised and unsupervised learning, neural networks, deep learning frameworks, and real-world AI applications.",
        order: 18
    },
    {
        id: "cert-19",
        title: "Python Essentials",
        issuer: "Vityarthi",
        period: "Dec 2023",
        image: "/certificates/cert-vityarthi-python.jpg",
        description:
            "Fundamental Python programming concepts, syntax, and problem-solving techniques. Credential ID: 100618484274169790.",
        order: 19
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
    achievements,
    messages: []
};
