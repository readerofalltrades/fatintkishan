import {
  Globe,
  AppWindow,
  Cpu,
  Gamepad2,
  Box,
  Pen,
  Server,
  Terminal,
} from "lucide-react";

const allProjects = [
  {
    title: "fatintkishan v3",
    date: "May 2026 — Present",
    category: "Website",
    icon: Globe,
    tools: ["React", "Vite", "CSS", "Cloudflare Pages"],
    description:
      "Next iteration of my portfolio website built with React, Vite, and Cloudflare Pages, focusing on performance and long-term maintainability.",
    github: "https://github.com/readerofalltrades/fatintkishan",
  },
  {
    title: "Victus16 Fan Control GUI",
    date: "May 2026",
    category: "Application",
    icon: AppWindow,
    tools: ["Electron", "Bash", "Node.js"],
    description:
      "Converted a Linux fan control bash script into an Electron-based GUI application for easier hardware control and usability.",
  },
  {
    title: "CachyOS Custom Setup",
    date: "December 2025 — Present",
    category: "Ricing",
    icon: Terminal,
    tools: ["CachyOS", "Hyprland", "GNU Stow"],
    description:
      "A fully customized Linux setup focused on workflow optimization, system tuning, and documentation of a personalized Arch-based environment.",
    github: "https://github.com/readerofalltrades/dotfiles",
  },
  {
    title: "Pi-hole Home Lab",
    date: "November 2025",
    category: "Home Lab",
    icon: Server,
    tools: ["Raspberry Pi 5", "Pi-hole"],
    description:
      "Set up a Raspberry Pi 5-based Pi-hole system for network-wide ad and telemetry blocking, exploring DNS and self-hosted infrastructure.",
  },
  {
    title: "Pathfinder — Line Follower Robot",
    date: "November 2025",
    category: "Robot",
    icon: Cpu,
    tools: ["ESP32", "C++", "IR Sensors", "L298N", "PID Control"],
    description:
      "Built a line-following robot using ESP32, focusing on embedded control, sensor logic, and real-world hardware behavior.",
    github: "https://github.com/readerofalltrades/pathfinder-lfr-esp32",
  },
  {
    title: "En-Bn OCR Tool",
    date: "May 2025",
    category: "Application",
    icon: AppWindow,
    tools: ["Python", "Tesseract", "Tkinter"],
    description:
      "A Python-based OCR utility for extracting and processing English, & Bangla-readable text from images.",
    github: "https://github.com/readerofalltrades/en-bn-ocr-tool",
  },
  {
    title: "Cultural Program Stage Model",
    date: "April 2025",
    category: "3D Model",
    icon: Box,
    tools: ["Blender"],
    description:
      "Designed the entire stage and peripherals BRAC University Residential Semester cultural program using Blender",
  },
  {
    title: "RS Cultural Program — Banner & Stage Design",
    date: "April 2025",
    category: "Graphics Design",
    icon: Pen,
    tools: ["Adobe Illustrator"],
    description:
      "Designed banners and visual materials for a BRAC University Residential Semester cultural program using Adobe Illustrator.",
  },
  {
    title: "Mario Clone",
    date: "February 2025",
    category: "Game",
    icon: Gamepad2,
    tools: ["Godot"],
    description:
      "A small platformer game built in Godot to understand game loops, physics, and level design through practical implementation.",
  },
  {
    title: "fatintkishan v2.0",
    date: "November 2024",
    category: "Website",
    icon: Globe,
    tools: ["React", "Vite", "HTML", "CSS", "Node.js", "Vercel"],
    description:
      "A full redesign of my portfolio using React, Vite, Node.js, and modern deployment workflows, focusing on component-based structure and scalability.",
  },
  {
    title: "Donut",
    date: "May 2024",
    category: "3D Model",
    icon: Box,
    tools: ["Blender"],
    description:
      "A Blender 3D modeling exercise recreating the classic donut scene, used to learn modeling fundamentals, lighting, and rendering workflows.",
  },
  {
    title: "fatintkishan v1.0",
    date: "May 2024",
    category: "Website",
    icon: Globe,
    tools: ["HTML", "CSS"],
    description:
      "Rebuilt my personal website with improved structure using HTML and CSS, focusing on cleaner layout and better presentation.",
  },
  {
    title: "fatintkishan v0.0",
    date: "May 2023",
    category: "Website",
    icon: Globe,
    tools: ["HTML", "CSS"],
    description:
      "My first personal website built using only HTML and CSS, mainly to understand basic web structure and how pages are organized.",
  },
  {
    title: "School Science Fair Project",
    date: "March 2019",
    category: "Science",
    icon: Cpu,
    tools: ["Arduino UNO"],
    description:
      "Built and presented an android-controlled water vehicle project for the SCL 6th National Science Festival, focusing on cleaning junk and debris from water surfaces.",
  },
];

export default allProjects;
