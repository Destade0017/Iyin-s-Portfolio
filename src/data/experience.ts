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
    role: "IT Intern (B.Sc. Industrial Training)",
    company: "Newgate Medical Services Limited",
    location: "Lagos, Nigeria",
    date: "May 2025 – August 2025",
    description: "Supported medical IT infrastructure, enterprise networking, telemedicine systems, and web hosting administration as part of the B.Sc. Computer Science requirements.",
    responsibilities: [
      "Configured and troubleshot organizational computer networks, including IP addressing, DHCP, routers, and switches.",
      "Diagnosed and resolved hardware, software, and Windows operating system issues across clinical and administrative workstations.",
      "Configured Hyper-V virtual machines and server/client environments to support operational IT workflows.",
      "Installed, configured, and maintained biometric authentication devices and telemedicine systems for hospital operations.",
      "Assisted with routine cloud infrastructure, web hosting administration, and server maintenance tasks."
    ],
    technologies: ["Networking (DHCP/Routers/Switches)", "Hyper-V", "Telemedicine Systems", "Web Hosting", "Windows Administration"]
  },
  {
    role: "IT Intern",
    company: "YAFP Nigeria Limited",
    location: "Lagos, Nigeria",
    date: "April 2024 – July 2024",
    description: "Assisted in enterprise IT support, routine system backup management, data encryption, and digital data entry operations.",
    responsibilities: [
      "Managed confidential digital records with data encryption protocols and secure storage practices.",
      "Conducted routine database and system data backups to ensure organizational data integrity.",
      "Accurately input, validated, and processed operational data across company information systems."
    ],
    technologies: ["Data Encryption", "Data Backup & Recovery", "System Administration", "Database Records"],
    isSecondary: false
  }
];
