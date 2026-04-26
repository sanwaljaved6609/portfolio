import profile from "./profile.png";

export const bio = {
    name: "Muhammad Sanwal Javed",
    title: "Full-Stack Software Engineer",
    description: "I am a Software Engineer with a strong focus on full-stack web development, specializing in the MERN stack and Laravel backend. I have hands-on experience working with technologies such as React.js, Node.js, Laravel, and MongoDB, building scalable, efficient, and user-friendly applications.",
    about: "I am passionate about writing clean code, solving real-world problems, and continuously learning new tools and technologies to enhance my development skills.",
    email: "sanwaljaved720@gmail.com",
    github: "https://github.com/sanwaljaved",
    linkedin: "https://linkedin.com/in/sanwaljaved",
    profileImage: profile
};

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Framer Motion", logo: "https://raw.githubusercontent.com/framer/motion/main/packages/framer-motion/assets/framer-motion.svg" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" }
        ]
    },
    {
        category: "Database & Tools",
        items: [
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ]
    }
];

export const experiences = [
    {
        company: "Software Solutions Inc.",
        role: "Full Stack Developer",
        period: "2023 - Present",
        description: "Developing scalable web applications using React and Laravel. Optimizing database performance and implementing real-time features."
    },
    {
        company: "Tech Innovators",
        role: "Junior Web Developer",
        period: "2022 - 2023",
        description: "Built responsive user interfaces and integrated third-party APIs for various client projects."
    }
];

export const education = [
    {
        institution: "Your University Name",
        degree: "Bachelor of Science in Computer Science",
        period: "2018 - 2022",
        description: "Graduated with honors. Specialized in Software Engineering and Database Management."
    }
];

export const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack shop with real-time inventory and Stripe payments.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind"],
        link: "https://github.com/sanwaljaved",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "AI Image Generator",
        description: "Integrated OpenAI API to generate art from text prompts.",
        tech: ["React", "OpenAI API", "Framer Motion"],
        link: "https://github.com/sanwaljaved",
        image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000"
    }
];
