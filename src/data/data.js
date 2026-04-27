import profile from "../assets/profile.png";
import whatsappQR from "../assets/whatsapp_qr.png";
import cvFile from "../assets/CV.pdf";

export const bio = {
    name: "Muhammad Sanwal Javed",
    title: "Full-Stack Software Engineer",
    description: "I am a Software Engineer with a strong focus on full-stack web development, specializing in the MERN stack and Laravel backend. I have hands-on experience working with technologies such as React.js, Node.js, Laravel, and MongoDB, building scalable, efficient, and user-friendly applications.",
    about: "I am passionate about writing clean code, solving real-world problems, and continuously learning new tools and technologies to enhance my development skills.",
    email: "sanwaljaved720@gmail.com",
    github: "https://github.com/sanwaljaved6609",
    linkedin: "https://www.linkedin.com/in/muhammad-sanwal-javed-831082257?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    facebook: "https://www.facebook.com/share/1H1GT6p8yQ/",
    insta: "https://www.instagram.com/im_sanwal1?igsh=MW4yYWY3cjJ4dGp2YQ==",
    whatsapp: "https://wa.me/+923400743553",
    profileImage: profile,
    whatsappQR: whatsappQR,
    cv: cvFile
};



export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Material UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" },
            { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
            { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "MVC Architecture", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        ]
    },
    {
        category: "Database & Tools",
        items: [
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Mongoose", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }
        ]
    }
];

export const experiences = [
    {
        company: "Programmer's Force",
        role: "Laravel Developer (Internship)",
        period: "8-Jan-2026 - 8-Jun-2026",
        description: "Worked as Laravel Developer and worked on the Barie.ai product an AI agent. Implemented the CRUD operations for the Barie.ai product, integrated the bot agents in different social apps."
    },
    {
        company: "Nisat Mills Ltd.",
        role: "Junior SQL Developer (Internship)",
        period: "4-Jun-2023 - 5-Jul-2023",
        description: "Developed and maintained SQL Server databases, wrote complex queries and stored procedures, and optimized database performance."
    }
];

export const education = [
    {
        institution: "University of Management and Technology Lahore",
        degree: "Bachelor of Science in Computer Science",
        period: "2021 - 2025",
        description: "Graduated with honors. Specialized in Software Engineering and Database Management."
    },
    {
        institution: "Punjab Group of Colleges Sheikhupura",
        degree: "FSc pre-medical",
        period: "2019 - 2021",
        description: "Graduated with A+ grade."
    },
    {
        institution: "Government Furqan Shaheed High school Sheikhupura",
        degree: "Matriculation",
        period: "2017 - 2019",
        description: "Graduated with A+ grade."
    }
];

export const projects = [
    {
        title: "Laravel Google Drive Clone",
        description: "A full-stack cloud drive clone with user authentication, file/folder management, trash recovery, and sharing features.",
        tech: ["Laravel", "PHP", "MongoDB", "JavaScript"],
        link: "https://github.com/sanwaljaved6609/laravel-google-drive-clone",
        image: "https://chromeunboxed.com/wp-content/uploads/2020/11/Google-Drive-Feature-Encryption.png"
    },
    {
        title: "E-Commerce Store",
        description: "A modern e-commerce type website featuring product listings and a responsive UI for a seamless shopping experience.",
        tech: ["React.js", "Tailwind CSS", "Context API"],
        link: "https://github.com/sanwaljaved6609/e-commerece-store",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Quiz Application",
        description: "An interactive quiz app that allows users to take quizzes with real-time scoring and dynamic question loading.",
        tech: ["React.js", "CSS", "JavaScript"],
        link: "https://github.com/sanwaljaved6609/Quiz-App",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Spotify Clone",
        description: "A functional music player clone allowing users to play/pause songs and view playlists from their favorite artists.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/sanwaljaved6609/Spotify-Clone",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1000"
    }
];
