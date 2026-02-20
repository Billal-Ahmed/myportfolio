export const personalInfo = {
    name: "Bilal Ahmed",
    title: "Software Engineer",
    subtitle: "Python | RAG Systems | Open-Source AI | Backend (Node.js, APIs) | ReactJS",
    email: "bilalahmedskardu@gmail.com",
    phone: "+92 307 2223281",
    location: "Gilgit-Baltistan, Pakistan",
    age: 24,
    github: "https://github.com/Billal-Ahmed",
    linkedin: "https://linkedin.com/in/codeskd",
    instagram: "https://instagram.com/bill_aal__ahmed",
};

export const aboutText = `I am a CS graduate with a strong interest in building practical, real-world software systems — particularly AI-powered and backend-focused applications.

My work focuses on integrating modern AI techniques — such as Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) — into usable software products rather than purely theoretical models.

I strongly believe in learning by building. Most of my skills come from hands-on projects, debugging real systems, and understanding how things work internally.

I have strengthened my foundation through coursework and certifications from Harvard (CS50), Duke University, Google, IBM, and NUST.`;

export const stats = [
    { label: "GitHub Repos", value: "22+" },
    { label: "CGPA", value: "3.7" },
    { label: "Connections", value: "500+" },
    { label: "Certifications", value: "10+" },
];

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: "FaReact" },
            { name: "Next.js", icon: "SiNextdotjs" },
            { name: "JavaScript", icon: "SiJavascript" },
            { name: "TypeScript", icon: "SiTypescript" },
            { name: "HTML5", icon: "FaHtml5" },
            { name: "CSS3", icon: "FaCss3Alt" },
            { name: "Bootstrap", icon: "SiBootstrap" },
            { name: "Tailwind CSS", icon: "SiTailwindcss" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "FaNodeJs" },
            { name: "Express.js", icon: "SiExpress" },
            { name: "Python", icon: "FaPython" },
            { name: "Flask", icon: "SiFlask" },
            { name: "REST APIs", icon: "FaServer" },
        ],
    },
    {
        category: "AI & LLMs",
        items: [
            { name: "RAG Pipelines", icon: "FaBrain" },
            { name: "LangChain", icon: "SiLangchain" },
            { name: "Prompt Engineering", icon: "FaRobot" },
            { name: "Embeddings", icon: "FaMicrochip" },
            { name: "Open-Source LLMs", icon: "FaCogs" },
        ],
    },
    {
        category: "Databases & Tools",
        items: [
            { name: "MongoDB", icon: "SiMongodb" },
            { name: "MySQL", icon: "SiMysql" },
            { name: "Docker", icon: "FaDocker" },
            { name: "Git & GitHub", icon: "FaGitAlt" },
            { name: "Linux", icon: "FaLinux" },
            { name: "Shell Scripting", icon: "FaTerminal" },
        ],
    },
];

export const projects = [
    {
        title: "Offline Chatbot using LLM & RAG",
        description:
            "An offline RAG chatbot using Flask, ChromaDB, and Ollama. Processes PDF documents, generates embeddings, and provides context-aware answers through a web interface. Fully local and privacy-focused.",
        techStack: ["Python", "Flask", "ChromaDB", "Ollama", "RAG", "LangChain"],
        github: "https://github.com/Billal-Ahmed/LocalizeLLM-RAG-chatapp",
        videoUrl: "",
        image: "",
        featured: true,
    },
    {
        title: "Web Data Extraction & Summarization Tool",
        description:
            "A smart web-based tool that extracts web data, parses it into an LLM with a user query automatically using Python, Streamlit, Groq, Selenium, BeautifulSoup4, and webdriver-manager.",
        techStack: ["Python", "Streamlit", "Groq", "Selenium", "BeautifulSoup4"],
        github: "https://github.com/Billal-Ahmed/Web-Data-Extraction-and-Summarization-Tool",
        videoUrl: "",
        image: "",
        featured: true,
    },
    {
        title: "Employee Management System",
        description:
            "A full CRUD Node.js and MongoDB employee management web app. Architected with scalable MVC backend using Express and Mongoose, with containerized deployment via Docker.",
        techStack: ["Node.js", "Express", "MongoDB", "Docker", "MVC"],
        github: "https://github.com/Billal-Ahmed/Build-a-CRUD-web-app",
        videoUrl: "",
        image: "",
        featured: true,
    },
    {
        title: "College Website Chatbot",
        description:
            "An intelligent chatbot integrated into a college website, providing automated responses and assistance to students and faculty using modern NLP techniques.",
        techStack: ["Python", "CSS", "NLP", "Flask"],
        github: "https://github.com/Billal-Ahmed/college-website-chatbot",
        videoUrl: "",
        image: "",
    },
    {
        title: "Weather Forecast Application",
        description:
            "A modular frontend application that consumes external RESTful API data to deliver live meteorological updates with a clean, responsive interface.",
        techStack: ["JavaScript (ES6+)", "REST APIs", "CSS3", "HTML5"],
        github: "https://github.com/Billal-Ahmed/Website-using-APIs-with-HTML-JavaScript-and-JSON",
        videoUrl: "",
        image: "",
    },
    {
        title: "Chrome Extension – Random Joke Generator",
        description:
            "A fun Chrome extension that generates a random joke every time you click it. Built with vanilla JavaScript and Chrome Extension APIs.",
        techStack: ["JavaScript", "Chrome APIs", "HTML", "CSS"],
        github: "https://github.com/Billal-Ahmed/Chrom-Extension-Random-Joke-Generator",
        videoUrl: "",
        image: "",
    },
];

export const experience = [
    {
        role: "Freelance Software Developer",
        company: "Fiverr",
        period: "May 2025 – Present",
        description:
            "Building web apps and AI-based applications for clients across the globe. Specializing in full-stack development and AI integrations.",
        type: "work",
    },
    {
        role: "MERN Stack Developer",
        company: "K2PeakTechnologies",
        period: "Feb 2025 – Present",
        description:
            "Developing and maintaining full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
        type: "work",
    },
];

export const education = [
    {
        degree: "Certificate in CS50X",
        institution: "Harvard Online",
        period: "Jan 2025 – Nov 2026",
        details: "Computer Science",
        type: "education",
    },
    {
        degree: "BS Computer Science",
        institution: "University of Baltistan, Skardu",
        period: "Feb 2022 – Dec 2025",
        details: "CGPA: 3.7",
        type: "education",
    },
    {
        degree: "FSC (ICS)",
        institution: "Govt Degree College Skardu (FBISE)",
        period: "Jan 2020 – Dec 2021",
        details: "72.0%",
        type: "education",
    },
    {
        degree: "Hifz Quran",
        institution: "Wafaq ul Madaris Al-Arabia, Pakistan",
        period: "Feb 2013 – Aug 2016",
        details: "Quran Memorization",
        type: "education",
    },
];

export const certifications = [
    { name: "Google AI Essentials", org: "Google" },
    { name: "Docker Containers", org: "Google" },
    { name: "Bash Shell Scripting", org: "Coursera" },
    { name: "API Testing With Postman", org: "Postman" },
    { name: "Project Management", org: "Coursera" },
    { name: "Understanding Basic SQL Syntax", org: "Coursera" },
    { name: "AI For Everyone", org: "deeplearning.ai" },
    { name: "Prompt Engineering Generative AI", org: "Coursera" },
    { name: "Typescript in React: Get Started", org: "Coursera" },
    { name: "Intro to RAG", org: "Coursera" },
    { name: "Learn About JSON with JavaScript", org: "Coursera" },
    { name: "SEO Fundamentals", org: "Coursera" },
    { name: "Intro to Regular Expressions in SQL", org: "Coursera" },
];

export const achievements = [
    "Best Project Award – Science Exhibition, Boys Degree College Skardu (2024)",
    "Prize for Highest GPA in Class",
    "Winner, Speed Programming Competition – UOB Computing Society",
];

export const languages = [
    { name: "Balti", level: "Native" },
    { name: "Urdu", level: "Fluent" },
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Professional" },
    { name: "Arabic", level: "Elementary" },
];

export const hobbies = [
    "Watching YouTube on Tech, AI, Geopolitics & Trading",
    "Listening to podcasts (Lex Fridman, Joe Rogan)",
    "Exploring Linux & open-source technologies",
];
