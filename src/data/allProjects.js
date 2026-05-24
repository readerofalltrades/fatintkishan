import {
  Globe,
  AppWindow,
  Cpu,
  Gamepad2,
  Box,
  Pen,
  Server,
  Terminal,
  FlaskConical,
} from "lucide-react";

const allProjects = [
  {
    title: "fatintkishan v3",
    date: "May 2026 — Present",
    category: "Website",
    icon: Globe,
    tools: ["React", "Vite", "CSS", "Cloudflare Pages"],
    description: "Current iteration of the personal portfolio — ongoing.",
  },
  {
    title: "Victus16 Fan Control GUI",
    date: "May 2026",
    category: "Application",
    icon: AppWindow,
    tools: ["Electron", "Bash", "Node.js"],
    description:
      "Wrapped a fan control bash script into a desktop GUI for the HP Victus 16.",
  },
  {
    title: "CachyOS Custom Setup",
    date: "December 2025 — Present",
    category: "Ricing",
    icon: Terminal,
    tools: ["CachyOS", "Hyprland", "GNU Stow"],
    description:
      "Fully custom Arch-based Linux setup with no desktop environment, tiled window management, and documented dotfiles.",
  },
  {
    title: "Pi-hole Home Lab",
    date: "November 2025",
    category: "Home Lab",
    icon: Server,
    tools: ["Raspberry Pi 5", "Pi-hole"],
    description:
      "Network-wide ad and telemetry blocking across the home network.",
  },
  {
    title: "Pathfinder — Line Follower Robot",
    date: "November 2025",
    category: "Robot",
    icon: Cpu,
    tools: ["ESP32", "C++", "IR Sensors", "L298N", "PID Control"],
    description:
      "Autonomous robot that follows a black line using PID control.",
  },
  {
    title: "En-Bn OCR Tool",
    date: "May 2025",
    category: "Application",
    icon: AppWindow,
    tools: ["Python", "Tesseract", "Tkinter"],
    description:
      "Desktop tool that extracts text from images in both English and Bangla.",
  },
  {
    title: "Cultural Program Stage Model",
    date: "April 2025",
    category: "3D Model",
    icon: Box,
    tools: ["Blender"],
    description:
      "3D model of the RS Cultural Program stage used for pre-event planning and visualization.",
  },
  {
    title: "RS Cultural Program — Banner & Stage Design",
    date: "April 2025",
    category: "Graphics Design",
    icon: Pen,
    tools: ["Adobe Illustrator"],
    description:
      "Designed all banners and visual collateral for BRAC University's residential semester cultural program.",
  },
  {
    title: "Mario Clone",
    date: "February 2025",
    category: "Game",
    icon: Gamepad2,
    tools: ["Godot"],
    description: "A side-scrolling Mario-style platformer.",
  },
  {
    title: "fatintkishan v2.0",
    date: "November 2024",
    category: "Website",
    icon: Globe,
    tools: ["React", "Vite", "HTML", "CSS", "Node.js", "Vercel"],
    description:
      "Second React-based iteration of the portfolio, hosted on Vercel.",
  },
  {
    title: "Donut",
    date: "May 2024",
    category: "3D Model",
    icon: Box,
    tools: ["Blender"],
    description: "The classic Blender beginner donut. First 3D model.",
  },
  {
    title: "fatintkishan v1.0",
    date: "May 2024",
    category: "Website",
    icon: Globe,
    tools: ["HTML", "CSS"],
    description: "First redesign of the personal site.",
  },
  {
    title: "fatintkishan v0.0",
    date: "May 2023",
    category: "Website",
    icon: Globe,
    tools: ["HTML", "CSS"],
    description: "The very first personal website.",
  },
  {
    title: "School Science Fair Project",
    date: "March 2019",
    category: "Science",
    icon: FlaskConical,
    tools: [],
    description: "Participated in the SCL 6th National Science Festival.",
  },
];

export default allProjects;
