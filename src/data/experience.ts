export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  isSecondary?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "Apex Innovations & Tech Labs",
    location: "Lagos, Nigeria",
    date: "January 2026 – Present",
    description: "Developing modern, interactive user interfaces and connecting web applications to backend REST APIs in an agile engineering team.",
    responsibilities: [
      "Build modular, reusable frontend UI components using React, JavaScript (ES6+), and modern CSS.",
      "Integrate RESTful API endpoints for dynamic user authentication, live data queries, and asynchronous form submissions.",
      "Collaborate with designers to convert Canva and Figma wireframes into pixel-perfect, responsive web pages.",
      "Perform cross-browser compatibility testing and optimize client-side performance for mobile devices."
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Bootstrap", "Git", "Canva"]
  },
  {
    role: "Web Developer (Contract / Projects)",
    company: "Freelance & Digital Solutions",
    location: "Lagos, Nigeria (Remote)",
    date: "July 2025 – December 2025",
    description: "Delivered custom responsive websites and web application features for small business clients and digital brands.",
    responsibilities: [
      "Engineered full-stack business websites using HTML5, CSS3, JavaScript, PHP, and MySQL database backends.",
      "Redesigned legacy web pages into mobile-first, high-converting layouts using modern Bootstrap and CSS Grid/Flexbox.",
      "Integrated third-party APIs including email delivery services and payment/booking gateways.",
      "Conducted website audits to improve page loading speed, SEO structure, and usability."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"]
  },
  {
    role: "Web Projects Lead & Tech Community Mentor",
    company: "Student Tech Society & Academic Projects",
    location: "Lagos, Nigeria",
    date: "September 2024 – June 2025",
    description: "Directed web development teams on academic capstone projects and led hands-on coding workshops for computer science students.",
    responsibilities: [
      "Led the design and architecture of university project management and event registration web applications.",
      "Mentored junior students in core web fundamentals including HTML, CSS, JavaScript, and Git version control.",
      "Organized code review sessions and ensured adherence to web accessibility and clean coding standards."
    ],
    technologies: ["JavaScript", "HTML/CSS", "Git", "PHP", "UI/UX Design"],
    isSecondary: false
  },
  {
    role: "Academic Instructor & STEM Tutor",
    company: "Excel Educational Center",
    location: "Lagos, Nigeria",
    date: "January 2024 – August 2024",
    description: "Taught computational thinking, basic computer literacy, and mathematics to secondary students.",
    responsibilities: [
      "Developed structured lesson plans and practical exercises on computing concepts.",
      "Guided students in collaborative problem-solving and foundational logic exercises."
    ],
    isSecondary: true
  }
];
