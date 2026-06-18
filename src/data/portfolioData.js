import tradingImg from '../assets/projects/trading.png';
import portfolioImg from '../assets/projects/portfolio.png';
import dsaImg from '../assets/projects/dsa.png';

export const personalInfo = {
  name: 'Krati Gupta',
  roles: ['Software Developer', 'Frontend Developer', 'Problem Solver', 'DSA Enthusiast'],
  tagline: 'I build amazing web experiences and love solving complex problems with clean code.',
  email: 'kratigupta.2433353@gmail.com',
  phone: '+91 91257 09300',
  location: 'India',
  education: 'B.Tech CSE',
  college: 'PSIT College',
  github: 'https://github.com/kratiigupta',
  githubUsername: 'kratiigupta',
  linkedin: 'https://linkedin.com/in/kratiigupta',
  leetcode: 'https://leetcode.com/kratiigupta',
  resumeLink: '#',
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const aboutText = `I'm a Computer Science student passionate about Data Structures, Algorithms, and Web Development. Currently, I'm focusing on building real-world projects and improving my problem-solving skills.`;

export const timeline = [
  { year: '2024', label: 'Started Coding' },
  { year: '2025', label: 'DSA & Web Dev' },
  { year: '2026', label: 'Building Projects' },
  { year: 'Future', label: 'Impacting Lives' },
];

export const skills = [
  { name: 'C++', icon: 'cpp' },
  { name: 'Java', icon: 'java' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
];

export const featuredProjects = [
  {
    id: 1,
    title: 'AI Trading Journal',
    description: 'Track, analyze and improve your trades using AI insights and powerful analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: tradingImg,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'fullstack',
    features: ['Trade tracking', 'Analytics dashboard', 'AI-powered insights', 'Portfolio management'],
  },
  {
    id: 2,
    title: 'Portfolio Builder',
    description: 'Build stunning portfolios in minutes with modern templates.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: portfolioImg,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'web',
    features: ['Drag & drop builder', 'Modern templates', 'One-click deploy', 'Custom domains'],
  },
  {
    id: 3,
    title: 'DSA Tracker',
    description: 'Track your DSA journey, problem stats and maintain consistency.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: dsaImg,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'fullstack',
    features: ['Progress tracking', 'Problem categorization', 'Streak counter', 'Analytics'],
  },
];

export const allProjects = [
  ...featuredProjects,
  {
    id: 4,
    title: 'TaskFlow - CRUD App',
    description: 'MERN stack task manager with authentication and real-time updates.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: null,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'fullstack',
    features: ['Authentication', 'CRUD operations', 'Real-time updates', 'Responsive UI'],
  },
  {
    id: 5,
    title: 'Smart India Hackathon Website',
    description: 'Team-built responsive website under 72-hour hackathon pressure.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: null,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'web',
    features: ['Responsive design', 'Team collaboration', 'Fast delivery', 'Modern UI'],
  },
  {
    id: 6,
    title: 'Intrusion Detection System',
    description: 'Minor project on network threat detection using Python.',
    tech: ['Python', 'Networking'],
    image: null,
    live: '#',
    github: 'https://github.com/kratiigupta',
    category: 'security',
    features: ['Threat detection', 'Network monitoring', 'Alert system', 'Log analysis'],
  },
];

export const achievements = [
  { icon: 'trophy', number: 500, suffix: '+', label: 'Problems Solved' },
  { icon: 'folder', number: 15, suffix: '+', label: 'Projects' },
  { icon: 'certificate', number: 5, suffix: '+', label: 'Certifications' },
  { icon: 'code', number: 2, suffix: '', label: 'Hackathons' },
];

export const certifications = [
  'Python & Software Engineering – Infosys Springboard',
  'Problem Solving, CSS & JavaScript – HackerRank',
  'Networking & Cyber Security – Cisco Networking Academy',
  'Secretary, Codester Club – PSIT College',
  'Smart India Hackathon 2025 Participant',
];

export const commandPaletteItems = [
  { name: 'Projects', icon: '📁', action: '#projects', type: 'navigate' },
  { name: 'All Projects', icon: '🗂️', action: '/projects', type: 'route' },
  { name: 'Resume', icon: '📄', action: '#', type: 'download' },
  { name: 'Contact', icon: '📧', action: '#contact', type: 'navigate' },
  { name: 'GitHub', icon: '🐙', action: 'https://github.com/kratiigupta', type: 'external' },
  { name: 'LinkedIn', icon: '💼', action: 'https://linkedin.com/in/kratiigupta', type: 'external' },
  { name: 'LeetCode', icon: '⚡', action: 'https://leetcode.com/kratiigupta', type: 'external' },
  { name: 'About', icon: '👤', action: '#about', type: 'navigate' },
  { name: 'Skills', icon: '🛠️', action: '#skills', type: 'navigate' },
  { name: 'Achievements', icon: '🏆', action: '#achievements', type: 'navigate' },
];
