"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Laptop,
  Network,
  Server,
  Award,
  FileText,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  Menu,
  X,
  Layers,
  ShieldCheck,
  Eye,
  ChevronRight,
  Terminal,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ajayiiyinoluwa56@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0B0D12] selection:bg-[#142B4A] selection:text-white flex flex-col font-sans">

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[rgba(11,13,18,0.08)] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-10 h-10 rounded-xl bg-[#142B4A] text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm transition-transform group-hover:scale-105">
              AE
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#0B0D12] group-hover:text-[#142B4A] transition-colors">
                Ajayi Enitan
              </span>
              <span className="text-[11px] text-[#737B87] font-medium leading-none">
                Front-End Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#737B87]">
            <a href="#about" className="hover:text-[#142B4A] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#142B4A] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#142B4A] transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-[#142B4A] transition-colors">
              Education & Certs
            </a>
            <a href="#contact" className="hover:text-[#142B4A] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Ajayi_Enitan_CV.pdf"
              download="Ajayi_Enitan_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F3F5F7] text-[#142B4A] hover:bg-[#e6ebf0] text-xs font-semibold border border-[rgba(11,13,18,0.08)] transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#142B4A] text-white hover:bg-[#0E1F36] text-xs font-semibold transition-all shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0B0D12] hover:bg-[#F3F5F7] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(11,13,18,0.08)] bg-white px-5 py-4 space-y-3 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B0D12] py-1"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B0D12] py-1"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B0D12] py-1"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B0D12] py-1"
            >
              Education & Certifications
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B0D12] py-1"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Ajayi_Enitan_CV.pdf"
                download="Ajayi_Enitan_CV.pdf"
                className="w-full text-center py-2.5 rounded-lg bg-[#F3F5F7] text-[#142B4A] font-semibold text-xs border border-[rgba(11,13,18,0.08)]"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[rgba(11,13,18,0.06)] bg-grid-pattern">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F3F5F7] border border-[rgba(11,13,18,0.08)] mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-[#142B4A]">
                  Lagos, Nigeria · Open to Opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B0D12] leading-[1.12] mb-6">
                Creating modern, responsive, and{" "}
                <span className="text-[#142B4A] underline decoration-[rgba(20,43,74,0.25)] underline-offset-8">
                  intuitive web experiences.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#737B87] leading-relaxed mb-8 font-normal">
                I am <strong className="text-[#0B0D12] font-semibold">Ajayi Enitan</strong>, a{" "}
                <span className="text-[#142B4A] font-semibold">First-Class Computer Science graduate</span>{" "}
                from Caleb University specializing in Front-End Development, transforming ideas and
                designs into engaging digital experiences with clean architecture and robust APIs.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#142B4A] text-white hover:bg-[#0E1F36] text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#142B4A] hover:bg-[#F3F5F7] text-sm font-semibold border border-[rgba(11,13,18,0.12)] transition-all shadow-xs"
                >
                  <Eye className="w-4 h-4 text-[#142B4A]" />
                  <span>Preview CV</span>
                </button>

                <a
                  href="/Ajayi_Enitan_CV.pdf"
                  download="Ajayi_Enitan_CV.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F3F5F7] text-[#0B0D12] hover:bg-[#e8ecf0] text-sm font-semibold border border-[rgba(11,13,18,0.08)] transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#737B87]" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[rgba(11,13,18,0.06)]">
              <div className="p-4 rounded-xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs">
                <div className="text-2xl font-extrabold text-[#142B4A]">First-Class</div>
                <div className="text-xs text-[#737B87] font-medium mt-1">
                  B.Sc. Computer Science (Caleb Univ)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs">
                <div className="text-2xl font-extrabold text-[#142B4A]">Front-End</div>
                <div className="text-xs text-[#737B87] font-medium mt-1">
                  React, Next.js, TS, Tailwind
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs">
                <div className="text-2xl font-extrabold text-[#142B4A]">IT & Networks</div>
                <div className="text-xs text-[#737B87] font-medium mt-1">
                  Systems, DHCP, Hyper-V
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs">
                <div className="text-2xl font-extrabold text-[#142B4A]">8+ Certifications</div>
                <div className="text-xs text-[#737B87] font-medium mt-1">
                  CompTIA, Cisco, New Horizons
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 md:py-28 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#142B4A] tracking-wider uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>About Me</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0D12] tracking-tight mb-8">
                  Passionate Front-End Developer with a Strong Systems Foundation.
                </h2>

                {/* The User's Exact About Me Content */}
                <div className="space-y-5 text-base sm:text-lg text-[#333A44] leading-relaxed">
                  <p className="p-4 rounded-xl bg-[#F3F5F7] border-l-4 border-[#142B4A] font-medium text-[#0B0D12]">
                    I am <span className="font-bold">Ajayi Enitan</span>, a First-Class Computer
                    Science graduate from Caleb University based in Lagos, Nigeria, who is dedicated
                    to create modern, responsive, and intuitive web experiences.
                  </p>

                  <p>
                    I specialize in Front-End Development, transforming ideas and designs into
                    engaging digital experiences. I enjoy creating clean, intuitive interfaces,
                    integrating APIs, and building web applications that combine functionality with
                    great user experience.
                  </p>

                  <p>
                    Beyond writing code, I am a curious problem-solver who believes in continuous
                    learning, collaboration, and building solutions that make a meaningful impact. My
                    background in IT support, networking, and troubleshooting also gives me a broader
                    understanding of technology and how systems work together.
                  </p>

                  <p>
                    Starting my career, I am seeking graduate internships, junior front-end
                    developer positions, or entry-level tech roles. My goal is to work on practical
                    projects, gain mentorship from experts, and evolve into a versatile software
                    developer.
                  </p>

                  <p className="font-medium text-[#142B4A]">
                    I'm always excited to connect with people, explore new technologies, and turn
                    creative ideas into functional digital products.
                  </p>

                  <div className="pt-2">
                    <span className="inline-block px-4 py-2 rounded-lg bg-[#142B4A] text-white font-semibold text-sm tracking-wide">
                      Let us build something meaningful together.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Pillars & Attributes */}
              <div className="lg:w-2/5 w-full space-y-4">
                <div className="p-6 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-4">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B0D12] mb-1.5">
                    Front-End Engineering
                  </h3>
                  <p className="text-sm text-[#737B87] leading-relaxed">
                    Translating wireframes and UI designs into responsive, accessible, and fast web
                    interfaces using React, Next.js, TypeScript, and modern component systems.
                  </p>
                </div>

                <div className="p-6 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B0D12] mb-1.5">
                    IT & Systems Insight
                  </h3>
                  <p className="text-sm text-[#737B87] leading-relaxed">
                    Practical background in network protocols (IP/DHCP), Hyper-V virtualization,
                    hardware diagnostics, and troubleshooting across clinical and corporate
                    environments.
                  </p>
                </div>

                <div className="p-6 rounded-2xl glass-card">
                  <div className="w-10 h-10 rounded-xl bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0B0D12] mb-1.5">
                    First-Class Academic Discipline
                  </h3>
                  <p className="text-sm text-[#737B87] leading-relaxed">
                    Graduated with First-Class Honours in Computer Science from Caleb University.
                    Dedicated to continuous learning, mentoring, and rigorous analytical thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & CAPABILITIES SECTION */}
        <section id="skills" className="py-20 md:py-28 bg-[#F3F5F7] border-y border-[rgba(11,13,18,0.06)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#142B4A] tracking-wider uppercase mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Skills & Tech Stack</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0D12] tracking-tight">
                Technical Expertise & Core Competencies
              </h2>
              <p className="text-[#737B87] mt-3 text-base">
                A balanced skillset combining front-end craft, API integration, and fundamental
                systems engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A] text-white flex items-center justify-center">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B0D12]">Front-End Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3 / Sass",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Vue.js",
                    "Tailwind CSS",
                    "Bootstrap",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#F3F5F7] text-[#142B4A] text-xs font-semibold border border-[rgba(11,13,18,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A] text-white flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B0D12]">Engineering Practices</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Component-Driven Architecture",
                    "Responsive Web Design",
                    "RESTful API Integration",
                    "Web Performance Optimization",
                    "Cross-Browser Debugging",
                    "State Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#F3F5F7] text-[#142B4A] text-xs font-semibold border border-[rgba(11,13,18,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A] text-white flex items-center justify-center">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B0D12]">Systems & IT Support</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Network Configuration (IP/DHCP)",
                    "Router & Switch Setup",
                    "Hyper-V Virtualization",
                    "Hardware Diagnostics",
                    "Windows OS Support",
                    "Web Hosting & Cloud Basics",
                    "Biometric & Telemedicine Units",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#F3F5F7] text-[#142B4A] text-xs font-semibold border border-[rgba(11,13,18,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A] text-white flex items-center justify-center">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B0D12]">Tools & Design</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git & GitHub",
                    "VS Code",
                    "Postman",
                    "Canva",
                    "UI/UX Prototyping",
                    "PHP (Hypertext Preprocessor)",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#F3F5F7] text-[#142B4A] text-xs font-semibold border border-[rgba(11,13,18,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 5 */}
              <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0B0D12]">Soft Skills & Collaboration</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Analytical Problem-Solving",
                    "Teamwork & Cross-functional Collaboration",
                    "Clear Technical Communication",
                    "Continuous Learning & Adaptability",
                    "Time & Project Management",
                    "Mentorship-Minded Growth",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-[#F3F5F7] text-[#142B4A] text-xs font-semibold border border-[rgba(11,13,18,0.06)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="py-20 md:py-28 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#142B4A] tracking-wider uppercase mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Professional Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0D12] tracking-tight">
                Hands-on Experience in Systems & Tech
              </h2>
              <p className="text-[#737B87] mt-3 text-base">
                Reverse-chronological record of practical IT and technical internships.
              </p>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[rgba(11,13,18,0.08)]">
              {/* Experience 1: Newgate Medical Services (May 2025 – August 2025) */}
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#142B4A] border-4 border-white shadow-xs"></div>
                <div className="p-6 sm:p-8 rounded-2xl glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B0D12]">
                        Newgate Medical Services Limited
                      </h3>
                      <div className="text-sm font-semibold text-[#142B4A]">
                        IT Support Intern
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F3F5F7] text-[#52525b] text-xs font-semibold border border-[rgba(11,13,18,0.06)]">
                        May 2025 – August 2025
                      </span>
                      <span className="text-xs text-[#737B87] font-medium">Lagos, Nigeria</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm text-[#3f3f46] mt-4">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Configured and troubleshot computer networks, resolving IP addressing, DHCP,
                        router, and switch configurations across hospital units.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Diagnosed and resolved critical hardware, software, and Windows operating
                        system issues across workstations to ensure uninterrupted clinical uptime.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Configured Hyper-V virtual machines and server/client environments to support
                        internal IT testing and departmental workflows.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Installed, configured, and maintained biometric staff devices and specialized
                        telemedicine systems.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Assisted with basic cloud management, web hosting administration, and automated
                        routine backups.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experience 2: YAFP Nigeria Limited (April 2024 – July 2024) */}
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#737B87] border-4 border-white shadow-xs"></div>
                <div className="p-6 sm:p-8 rounded-2xl glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B0D12]">YAFP Nigeria Limited</h3>
                      <div className="text-sm font-semibold text-[#142B4A]">IT & Data Intern</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F3F5F7] text-[#52525b] text-xs font-semibold border border-[rgba(11,13,18,0.06)]">
                        April 2024 – July 2024
                      </span>
                      <span className="text-xs text-[#737B87] font-medium">Lagos, Nigeria</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm text-[#3f3f46] mt-4">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Executed accurate data entry, verification, and file organization across
                        internal data systems.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Enforced data integrity standards through routine file encryption and scheduled
                        data backup protocols.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#142B4A] shrink-0 mt-0.5" />
                      <span>
                        Assisted staff members with day-to-day workstation hardware setup, peripheral
                        diagnostics, and software support.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-20 md:py-28 bg-[#F3F5F7] border-y border-[rgba(11,13,18,0.06)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#142B4A] tracking-wider uppercase mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Academic & Professional Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0D12] tracking-tight">
                Education & Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Education Cards */}
              <div className="space-y-4 lg:col-span-1">
                <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#142B4A] text-white flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                    First Class Honours
                  </span>
                  <h3 className="font-bold text-lg text-[#0B0D12]">Caleb University</h3>
                  <div className="text-sm font-semibold text-[#142B4A] mt-0.5">
                    B.Sc. (Hons) in Computer Science
                  </div>
                  <div className="text-xs text-[#737B87] mt-1">2022 – 2026 · Imota, Lagos, Nigeria</div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                  <h3 className="font-bold text-base text-[#0B0D12]">
                    Alpha Training Support Academy (ATSA)
                  </h3>
                  <div className="text-xs font-semibold text-[#142B4A] mt-0.5">
                    West African Senior School Certificate (WASSCE)
                  </div>
                  <div className="text-xs text-[#737B87] mt-1">2015 – 2021 · Lagos, Nigeria</div>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(11,13,18,0.07)] shadow-xs">
                <h3 className="font-bold text-lg text-[#0B0D12] mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#142B4A]" />
                  <span>Professional Trainings & Certifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Front-End Web Development Training",
                      issuer: "New Horizons Nigeria",
                      tag: "Front-End",
                    },
                    {
                      title: "IT Fundamentals (ITF+) – Setting Up & Using Computers",
                      issuer: "CompTIA / Caleb University",
                      tag: "CompTIA",
                    },
                    {
                      title: "Networking, Security, and Maintenance",
                      issuer: "CUL Technologies (CompTIA Authorized Partner)",
                      tag: "Networking",
                    },
                    {
                      title: "Databases and Software Development",
                      issuer: "CUL Technologies (CompTIA Authorized Partner)",
                      tag: "Software",
                    },
                    {
                      title: "Data Analytics Essentials",
                      issuer: "Cisco Networking Academy",
                      tag: "Cisco",
                    },
                    {
                      title: "Cloud Computing Fundamentals",
                      issuer: "CUL Technologies (CompTIA Authorized Partner)",
                      tag: "Cloud",
                    },
                    {
                      title: "Microsoft 365 Introduction",
                      issuer: "CUL Technologies (CompTIA Authorized Partner)",
                      tag: "Productivity",
                    },
                    {
                      title: "Mastery of Information Technology Ethics",
                      issuer: "CUL Technologies (CompTIA Authorized Partner)",
                      tag: "Ethics",
                    },
                  ].map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F3F5F7] border border-[rgba(11,13,18,0.05)] hover:border-[rgba(20,43,74,0.2)] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#142B4A] bg-white px-2 py-0.5 rounded border border-[rgba(11,13,18,0.05)]">
                            {cert.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs text-[#0B0D12] leading-snug">
                          {cert.title}
                        </h4>
                      </div>
                      <div className="text-[11px] text-[#737B87] font-medium mt-2">
                        {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-28 bg-[#F3F5F7] border-t border-[rgba(11,13,18,0.06)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#142B4A] tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D12] tracking-tight mb-4">
              Let us build something meaningful together.
            </h2>

            <p className="text-base sm:text-lg text-[#737B87] max-w-2xl mx-auto mb-10">
              I am actively seeking graduate internships, junior front-end developer roles, or
              entry-level tech opportunities. Whether you have a project, a question, or a role to
              discuss, my inbox is always open.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mb-10">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#737B87] font-medium">Email Me</div>
                  <div className="font-bold text-xs text-[#0B0D12] break-all mt-0.5">
                    ajayiiyinoluwa56@gmail.com
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B4A] hover:underline"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#737B87] font-medium">Phone / WhatsApp</div>
                  <div className="font-bold text-xs text-[#0B0D12] mt-0.5">
                    +234 704 249 6551
                  </div>
                </div>
                <a
                  href="https://wa.me/2347042496551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B4A] hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-5 rounded-2xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-3">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.57a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </div>
                  <div className="text-xs text-[#737B87] font-medium">Professional Network</div>
                  <div className="font-bold text-xs text-[#0B0D12] mt-0.5">
                    linkedin.com/in/enitan-ajayi
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/enitan-ajayi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#142B4A] hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-white border border-[rgba(11,13,18,0.06)] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#142B4A]/10 text-[#142B4A] flex items-center justify-center mb-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-[#737B87] font-medium">Base Location</div>
                  <div className="font-bold text-xs text-[#0B0D12] mt-0.5">Lagos, Nigeria</div>
                </div>
                <div className="mt-3 text-xs text-[#737B87] font-medium">
                  Available for Remote & Onsite
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-[rgba(11,13,18,0.08)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737B87]">
          <div>
            © 2026 <strong>Ajayi Enitan Fiyinfoluwa</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#142B4A] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#142B4A] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#142B4A] transition-colors">
              Experience
            </a>
            <a href="/Ajayi_Enitan_CV.pdf" download className="hover:text-[#142B4A] transition-colors">
              CV (PDF)
            </a>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE CV PREVIEW MODAL */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[rgba(11,13,18,0.1)]">
            <div className="p-4 bg-[#142B4A] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-zinc-300" />
                <span className="font-bold text-sm tracking-wide">
                  Ajayi Enitan Fiyinfoluwa — Curriculum Vitae (Preview)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/Ajayi_Enitan_CV.pdf"
                  download="Ajayi_Enitan_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#142B4A] hover:bg-zinc-100 text-xs font-bold transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F3F5F7]">
              {/* Paper Preview */}
              <div className="bg-white p-6 sm:p-10 rounded-xl shadow-md border border-[rgba(11,13,18,0.08)] max-w-3xl mx-auto text-[#0B0D12] text-xs leading-normal">
                {/* Header */}
                <div className="text-center border-b-2 border-[#142B4A] pb-3 mb-4">
                  <h1 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#0B0D12]">
                    Ajayi Enitan Fiyinfoluwa
                  </h1>
                  <div className="text-xs font-semibold text-[#142B4A] mt-1">
                    Front-End Developer & IT Support Specialist · First-Class Honours B.Sc.
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 text-[11px] text-[#737B87] mt-2">
                    <span>📍 Lagos, Nigeria</span>
                    <span>📞 +234 704 249 6551</span>
                    <span>✉️ ajayiiyinoluwa56@gmail.com</span>
                    <span>🔗 linkedin.com/in/enitan-ajayi</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] border-b border-[rgba(11,13,18,0.1)] pb-1 mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-[#333A44] leading-relaxed text-justify">
                    First-Class Computer Science graduate from Caleb University dedicated to
                    crafting modern, responsive, and intuitive web experiences. Specialize in
                    Front-End Development, translating design concepts and ideas into engaging
                    digital products with clean component architecture and seamless RESTful API
                    integration. Complement technical front-end capabilities with a solid foundation
                    in IT support, network configuration, and systems troubleshooting. Seeking
                    graduate internships, junior front-end developer roles, or entry-level software
                    engineering opportunities to contribute practical value, collaborate with
                    high-performing teams, and grow under expert mentorship.
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] border-b border-[rgba(11,13,18,0.1)] pb-1 mb-2">
                    Technical & Professional Skills
                  </h2>
                  <div className="space-y-1.5 text-[#333A44]">
                    <div>
                      <strong className="text-[#142B4A]">Front-End Technologies: </strong>
                      HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Tailwind
                      CSS, Bootstrap
                    </div>
                    <div>
                      <strong className="text-[#142B4A]">Engineering Practices: </strong>
                      Component-Driven Architecture, Responsive Web Design, Web Performance
                      Optimization, RESTful API Integration, State Management
                    </div>
                    <div>
                      <strong className="text-[#142B4A]">Tools & Version Control: </strong>
                      Git, GitHub, VS Code, Canva, UI/UX Prototyping
                    </div>
                    <div>
                      <strong className="text-[#142B4A]">IT & Systems Support: </strong>
                      Network Troubleshooting (IP/DHCP/Routers/Switches), Hyper-V Virtualization,
                      Hardware Diagnostics, Web Hosting & Cloud Basics
                    </div>
                    <div>
                      <strong className="text-[#142B4A]">Professional Competencies: </strong>
                      Analytical Problem-Solving, Team Collaboration, Adaptability, Time & Project
                      Management, Continuous Learning
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] border-b border-[rgba(11,13,18,0.1)] pb-1 mb-2">
                    Professional Experience
                  </h2>
                  <div className="mb-3">
                    <div className="flex justify-between font-bold text-[#0B0D12]">
                      <span>Newgate Medical Services Limited</span>
                      <span>May 2025 – August 2025</span>
                    </div>
                    <div className="flex justify-between italic text-[#737B87] mb-1">
                      <span>IT Support Intern</span>
                      <span>Lagos, Nigeria</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#333A44]">
                      <li>
                        Configured and troubleshot local computer networks, resolving IP addressing,
                        DHCP, router, and switch connectivity issues.
                      </li>
                      <li>
                        Diagnosed and serviced hardware, software, and Windows operating systems
                        across organizational workstations.
                      </li>
                      <li>
                        Set up and maintained Hyper-V virtual machines and server/client
                        environments.
                      </li>
                      <li>
                        Installed, calibrated, and maintained biometric staff attendance devices and
                        specialized telemedicine systems.
                      </li>
                      <li>
                        Assisted in routine cloud services, web hosting administration, and periodic
                        database backup tasks.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-[#0B0D12]">
                      <span>YAFP Nigeria Limited</span>
                      <span>April 2024 – July 2024</span>
                    </div>
                    <div className="flex justify-between italic text-[#737B87] mb-1">
                      <span>IT & Data Intern</span>
                      <span>Lagos, Nigeria</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#333A44]">
                      <li>
                        Executed accurate data entry, verification, and file organization across
                        internal records.
                      </li>
                      <li>
                        Enforced corporate data safety standards through routine file encryption and
                        scheduled data backup cycles.
                      </li>
                      <li>
                        Assisted staff with day-to-day hardware maintenance, peripheral setup, and
                        software troubleshooting inquiries.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] border-b border-[rgba(11,13,18,0.1)] pb-1 mb-2">
                    Education
                  </h2>
                  <div className="mb-2">
                    <div className="flex justify-between font-bold text-[#0B0D12]">
                      <span>Caleb University</span>
                      <span>2022 – 2026</span>
                    </div>
                    <div className="flex justify-between text-[#333A44]">
                      <span>
                        Bachelor of Science (B.Sc. Hons) in Computer Science —{" "}
                        <strong className="text-[#142B4A]">First Class Honours</strong>
                      </span>
                      <span className="text-[#737B87]">Imota, Lagos, Nigeria</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-bold text-[#0B0D12]">
                      <span>Alpha Training Support Academy (ATSA)</span>
                      <span>2015 – 2021</span>
                    </div>
                    <div className="flex justify-between text-[#333A44]">
                      <span>West African Senior School Certificate Examination (WASSCE)</span>
                      <span className="text-[#737B87]">Lagos, Nigeria</span>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#142B4A] border-b border-[rgba(11,13,18,0.1)] pb-1 mb-2">
                    Certifications & Professional Trainings
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[#333A44]">
                    <div>• <strong>Front-End Web Development Training</strong> – New Horizons Nigeria</div>
                    <div>• <strong>IT Fundamentals (ITF+)</strong> – CompTIA / Caleb University</div>
                    <div>• <strong>Networking, Security, and Maintenance</strong> – CUL Technologies (CompTIA)</div>
                    <div>• <strong>Databases and Software Development</strong> – CUL Technologies (CompTIA)</div>
                    <div>• <strong>Data Analytics Essentials</strong> – Cisco Networking Academy</div>
                    <div>• <strong>Cloud Computing Fundamentals</strong> – CUL Technologies (CompTIA)</div>
                    <div>• <strong>Microsoft 365 Introduction</strong> – CUL Technologies (CompTIA)</div>
                    <div>• <strong>Mastery of Information Technology Ethics</strong> – CUL Technologies (CompTIA)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
