import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Briefcase,
    Database,
    Code2,
    Terminal,
    Cpu,
    Server,
    Layout,
    Wrench
} from 'lucide-react';

// Personal Information
export const personalInfo = {
    name: "Alejandro Gibrán Zavala González",
    role: "Backend & ML Developer",
    valueStatement: "I build scalable backend systems and intelligent machine learning solutions using Python to turn data into real-world impact.",
    cvLink: "#",
    email: "alegizago@gmail.com",
};

// About Section
export const aboutData = {
    background: `Computer Systems Engineering student with a strong focus on backend development and applied machine learning. Experienced in building robust APIs and backend services using FastAPI and Django / Django REST Framework, as well as developing and analyzing ML models with Scikit-learn, NumPy, and Pandas. Proficient in data visualization using Matplotlib and Seaborn to communicate insights effectively. Possesses deep knowledge of Java for desktop application development and solid experience with SQL databases (PostgreSQL, MySQL, SQLite). Familiar with modern development tools and practices including Docker, Git/GitHub, Linux, pytest, and Jupyter Notebooks. Comfortable working with web technologies such as HTML, CSS, and JSON, with a strong interest in continuous learning and professional growth.`,
    highlights: [
        {
            title: "Python Backend",
            description: "Building robust APIs with FastAPI and Django",
            icon: Server,
        },
        {
            title: "Machine Learning in Production",
            description: "Deploying models with Scikit-learn, Pandas, NumPy, and Matplotlib",
            icon: Cpu,
        },
    ],
};

// Skills Data
export const skillsData = {
    Backend: {
        icon: Server,
        color: "from-primary-400 to-primary-600",
        skills: ["Python", "Java", "Django", "Django Rest Framework", "FastAPI", "Pydantic", "SQLModel"],
    },
    Frontend: {
        icon: Layout,
        color: "from-accent-400 to-accent-600",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    Databases: {
        icon: Database,
        color: "from-emerald-400 to-emerald-600",
        skills: ["PostgreSQL", "MySQL", "SQLite", "Apache"],
    },
    Tools: {
        icon: Wrench,
        color: "from-amber-400 to-amber-600",
        skills: ["Git / GitHub", "Linux", "Render", "Vercel"],
    },
};

// Projects Data
export const projectsData = [
    {
        id: 1,
        name: "Heart Failure Prediction",
        description: "A scalable REST API that detects heart failure risks using machine learning.",
        image: "/HeartPredictor.png",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "Pydantic", "Uvicorn", "HTML", "REACT"],
        githubLink: "https://github.com/ingGibran/Heart-Failure-Predictor",
        liveLink: "https://heart-failure-predictor-teal.vercel.app/",
        featured: true,
    },
    {
        id: 2,
        name: "House Price Predictor",
        description: "A scalable REST API that detects heart failure risks using machine learning.",
        image: "/HousePricePredictor.png",
        techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "FastAPI", "Pydantic", "Uvicorn", "HTML", "REACT"],
        githubLink: "https://github.com/ingGibran/House-Price-Predictor",
        liveLink: "https://house-price-predictor-ashy.vercel.app/",
        featured: false,
    }
];

// Experience Data
export const experienceData = [
    {
        id: 1,
        company: "Citelis",
        role: "Software Development Intern",
        period: "Aug 2023 - Dec 2023",
        description: "Developed the frontend of an internal system (SIGO) used by company employees, maintained and updated existing systems using Java and Python to fix bugs and implement new features, and collaborated with the development team to improve usability, performance, and overall reliability of internal tools.",
        technologies: ["Python", "Java", "HTML", "CSS", "Vue", "JavaScript", "Django"],
    },
    {
        id: 2,
        company: "Citelis",
        role: "Analyst Intern",
        period: "Aug 2025 - Present",
        description: "Analyzed and interpreted company data using Microsoft Dynamics 365 to support reporting, insights, and data-driven decision-making.",
        technologies: ["Microsoft Dynamics 365", "SQL", "Python", "Matplotlib", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
        id: 3,
        company: "Home",
        role: "Creating My Own Projects ❤️",
        period: "Everyday",
        description: "Creating my own projects to improve my skills and knowledge. You can find them on my GitHub: https://github.com/ingGibran",
        technologies: ["Python", "Java", "FastAPI", "Django", "Spring Boot", "PostgreSQL", "MySQL", "SQLite", "Apache", "Git / GitHub", "Linux", "Vercel"],
    }
];

// Education Data
export const educationData = [
    {
        id: 1,
        institution: "Instituto Tecnológico de Morelia",
        degree: "B.Eng. in Computer Systems Engineering",
        period: "Jan 2024 - Expected June 2029",
        description: "Focused on software development, databases, and machine learning. Coursework includes data structures, algorithms, computer networks, and AI fundamentals.",
        status: "In Progress",
        logo: "/itm-logo.webp",
    },
    {
        id: 2,
        degree: "Self-Study ❤️",
        period: "4 Ever",
        description: "Motivated by discipline, curiosity, and professional growth, I focus on continuous learning and actively study independently to strengthen my skills.",
        status: "In Progress",
    },
];

// Social Links
export const socialLinks = [
    {
        name: "Email",
        url: "mailto:alegizago@gmail.com", // Update with actual email
        icon: Mail,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alejandro-gibr%C3%A1n-zavala-gonz%C3%A1lez-517384358/", // Update with actual LinkedIn
        icon: Linkedin,
    },
    {
        name: "GitHub",
        url: "https://github.com/ingGibran", // Update with actual GitHub
        icon: Github,
    },
];

// Navigation Links
export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];
