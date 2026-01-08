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
    valueStatement: "I turn machine learning models into scalable APIs with FastAPI and scikit-learn.",
    cvLink: "#", // Update with actual CV link
    email: "your.email@example.com", // Update with actual email
};

// About Section
export const aboutData = {
    background: `Junior backend and machine learning developer focused on Python and Java, currently pursuing a B.Eng. in Computer Systems Engineering. Hands-on experience building CRUD applications, REST APIs, and desktop tools using Django, Spring Boot, and SQL databases, as well as applying machine learning techniques with Python (NumPy, pandas, scikit-learn). Interested in deploying ML models to production and constantly learning modern tools for AI and backend development within Linux-based environments.`,
    highlights: [
        {
            title: "Python Backend",
            description: "Building robust APIs with FastAPI and Django",
            icon: Server,
        },
        {
            title: "ML in Production",
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
        skills: ["Python", "Django", "Django Rest Framework", "FastAPI", "Pydantic", "SQLModel"],
    },
    Frontend: {
        icon: Layout,
        color: "from-accent-400 to-accent-600",
        skills: ["HTML", "CSS"],
    },
    Databases: {
        icon: Database,
        color: "from-emerald-400 to-emerald-600",
        skills: ["PostgreSQL", "MySQL", "SQLite", "Apache"],
    },
    Tools: {
        icon: Wrench,
        color: "from-amber-400 to-amber-600",
        skills: ["Git / GitHub", "Linux", "Render"],
    },
};

// Projects Data
export const projectsData = [
    {
        id: 1,
        name: "Heart Failure Prediction API",
        description: "A scalable REST API that detects heart failure risks using machine learning. Features include patient data validation, prediction endpoints, and model performance metrics. Built with production-ready architecture and Docker containerization.",
        image: null, // Add project screenshot path if available
        techStack: ["FastAPI", "Scikit-learn", "Docker", "Pydantic", "Pandas"],
        githubLink: "https://github.com/yourusername/heart-failure-api", // Update with actual link
        liveLink: "#", // Update with actual demo link
        featured: true,
    },
    // Add more projects here following the same structure
    // {
    //   id: 2,
    //   name: "Project Name",
    //   description: "Project description...",
    //   image: null,
    //   techStack: ["Tech1", "Tech2"],
    //   githubLink: "#",
    //   liveLink: "#",
    //   featured: false,
    // },
];

// Experience Data
export const experienceData = [
    {
        id: 1,
        company: "Your Company / Freelance",
        role: "Backend Developer",
        period: "2024 - Present",
        description: "Developed REST APIs and backend services using Python and FastAPI. Implemented machine learning models for data processing and prediction tasks. Worked with SQL databases and deployed applications to cloud platforms.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    },
    // Add more experience entries here
    // {
    //   id: 2,
    //   company: "Company Name",
    //   role: "Role Title",
    //   period: "Year - Year",
    //   description: "Description of responsibilities and achievements...",
    //   technologies: ["Tech1", "Tech2"],
    // },
];

// Education Data
export const educationData = [
    {
        id: 1,
        institution: "Your University", // Update with actual university name
        degree: "B.Eng. in Computer Systems Engineering",
        period: "2021 - Present", // Update with actual dates
        description: "Focused on software development, databases, and machine learning. Coursework includes data structures, algorithms, computer networks, and AI fundamentals.",
        status: "In Progress",
    },
    // Add certifications or additional education
    // {
    //   id: 2,
    //   institution: "Certification Provider",
    //   degree: "Certification Name",
    //   period: "Year",
    //   description: "Description...",
    //   status: "Completed",
    // },
];

// Social Links
export const socialLinks = [
    {
        name: "Email",
        url: "mailto:your.email@example.com", // Update with actual email
        icon: Mail,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile", // Update with actual LinkedIn
        icon: Linkedin,
    },
    {
        name: "GitHub",
        url: "https://github.com/yourusername", // Update with actual GitHub
        icon: Github,
    },
    {
        name: "Indeed",
        url: "https://indeed.com/profile", // Update with actual Indeed profile
        icon: Briefcase,
    },
    {
        name: "Computrabajo",
        url: "https://computrabajo.com/profile", // Update with actual profile
        icon: Briefcase,
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
