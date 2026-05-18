import { GitBranch, Coffee, Globe, Cpu, Server } from 'lucide-react'

const skills = [
  { name: 'DSA', 
    icon: GitBranch, 
    topics: ['Arrays', 'Stacks', 'Queues', 'Linked Lists', 'Trees', 'Graphs', 'Recursion', 'Sorting & Searching', 'Two Pointer', 'Sliding Window', 'Prefix Sums', 'BFS/DFS', 'Dijkstra', 'Dynamic Programming', 'Greedy'] 
  },
  { name: 'Java', 
    icon: Coffee, 
    topics: ['OOP', 'Classes & Inheritance', 'Interfaces', 'Exception Handling', 'Collections Framework', 'File I/O'] 
  },
  { name: 'Web Dev', 
    icon: Globe, 
    topics: ['HTML', 'CSS', 'React', 'Node.js', 'Vite', 'REST APIs', 'Git + GitHub'] 
  },
  { name: 'Robotics', 
    icon: Cpu, 
    topics: ['Arduino Uno', 'ESP32', 'GPIO', 'PWM', 'I2C/SPI', 'IR Sensors', 'Motor Drivers', 'PID Control', 'Serial Communication'] 
  },
  { name: 'Home Lab', 
    icon: Server, 
    topics: ['Raspberry Pi 5', 'Pi-hole', 'Jellyfin', 'Linux CLI', 'SSH', 'systemd', 'Network Configuration'] 
  },
]

export default skills