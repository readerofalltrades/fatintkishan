import { Monitor, Cpu, ScanText } from 'lucide-react'

const projects = [
  {
    title: 'Fan Control GUI',
    tagline: 'A 3-button desktop app that wraps a bash fan control script into a clean GUI.',
    stack: ['Electron', 'Node.js', 'HTML', 'CSS', 'JS'],
    slug: 'fan-control-gui',
    featured: true,
    icon: Monitor,
  },
  {
    title: 'Line Follower Robot',
    tagline: 'An autonomous robot that follows a black line using PID control.',
    stack: ['ESP32', 'C++', 'IR Sensors', 'L298N'],
    slug: 'line-follower-robot',
    featured: true,
    icon: Cpu,
  },
  {
    title: 'En-Bn OCR Tool',
    tagline: 'A desktop OCR tool that extracts text from images in both English and Bangla.',
    stack: ['Python', 'Tesseract', 'Tkinter'],
    slug: 'en-bn-ocr-tool',
    featured: true,
    icon: ScanText,
  },
]

export default projects