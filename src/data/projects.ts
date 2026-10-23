export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  initials: string;
}

export const projects: Project[] = [
  {
    id: "novamart",
    title: "NovaMart",
    type: "Modern E-Commerce Web App",
    description: "A responsive e-commerce web platform featuring product catalog discovery, dynamic category filtering, interactive shopping cart, and PHP backend order processing.",
    technologies: ["React", "JavaScript", "Bootstrap", "PHP", "MySQL", "REST APIs"],
    features: [
      "Dynamic Product Catalog & Filtering",
      "Interactive Cart State Management",
      "PHP REST API & Order Endpoint Handling",
      "Mobile-First Responsive Layout"
    ],
    featured: true,
    caseStudyUrl: "/projects/novamart",
    githubUrl: "https://github.com/ajayienitan",
    initials: "NM"
  },
  {
    id: "pulsetrack",
    title: "PulseTrack",
    type: "Healthcare & Appointment Dashboard",
    description: "An intuitive healthcare management dashboard enabling patient appointment booking, real-time vital metrics visualization, and asynchronous API data fetching.",
    technologies: ["React", "JavaScript (ES6+)", "REST APIs", "CSS3", "Canva", "Chart.js"],
    features: [
      "Real-time Appointment Booking Workflow",
      "Interactive Health Metrics & Charts",
      "Asynchronous REST API Integration",
      "High-Fidelity Accessible UI"
    ],
    featured: true,
    caseStudyUrl: "/projects/pulsetrack",
    githubUrl: "https://github.com/ajayienitan",
    initials: "PT"
  },
  {
    id: "flowtask",
    title: "FlowTask",
    type: "Project & Task Management Portal",
    description: "A dynamic project management application with customizable workflow stages, task assignments, and persistent PHP/MySQL database storage.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "PHP", "MySQL", "Bootstrap"],
    features: [
      "Multi-Stage Task Tracking Boards",
      "Form Validation & Error Handling",
      "Relational Database Schema & CRUD APIs",
      "Clean Component-Based Layout"
    ],
    featured: false,
    githubUrl: "https://github.com/ajayienitan",
    initials: "FT"
  },
  {
    id: "swiftnews",
    title: "SwiftNews & Weather Portal",
    type: "API-Driven Information Platform",
    description: "A fast, responsive live news and weather application integrating multiple external RESTful APIs with instant search, category filtering, and bookmarking.",
    technologies: ["React", "JavaScript", "REST APIs", "Bootstrap", "Canva UI Design"],
    features: [
      "Multi-Service REST API Ingestion",
      "Instant Keyword Search & Filtering",
      "Local Storage Article Bookmarks",
      "Cross-Browser Mobile Optimization"
    ],
    featured: false,
    githubUrl: "https://github.com/ajayienitan",
    initials: "SN"
  }
];
