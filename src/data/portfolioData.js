import sudarshanImg from '../assets/projects/sudarshan.png';
import smarteduImg from '../assets/projects/smartedu.png';
import rudraImg from '../assets/projects/rudra.png';

export const personalInfo = {
  name: 'Krati Gupta',
  roles: ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'DSA Enthusiast'],
  tagline: 'BCA student with a strong interest in software development and problem-solving. A quick learner with strong teamwork skills, seeking to build impactful real-world projects.',
  email: 'kratigupta.2433353@gmail.com',
  phone: '+91 91257 09300',
  location: 'Unnao, UP',
  education: 'B.C.A.',
  college: 'PSIT College of Higher Education',
  github: 'https://github.com/Kratiigupta',
  githubUsername: 'Kratiigupta',
  linkedin: 'https://linkedin.com/in/krati-gupta25',
  leetcode: 'https://leetcode.com/u/kratii_gupta/',
  hackerrank: 'https://www.hackerrank.com/profile/24116002282_krti',
  resumeLink: 'https://drive.google.com/file/d/1MmF68Su7TsHSx-T2CRlnbc7qXzWvQKZj/view?usp=drive_link',
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '#contact' },
];

export const aboutText = `I am a BCA student at PSIT College of Higher Education (2027) with an 8.72 CGPA. I have a strong interest in software development, problem-solving, and building robust web applications. I am experienced in working on both academic and personal projects, participating in technical events, and engaging in research activities. I'm a quick learner with strong communication skills, eager to gain industry experience.`;

export const timeline = [
  { year: '2022', label: 'High School (84%)' },
  { year: '2024', label: 'Intermediate (75%)' },
  { year: '2025', label: 'Research & Projects' },
  { year: '2027', label: 'BCA Graduation' },
];

export const skills = [
  // Languages
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Python', icon: 'python' },
  { name: 'C++', icon: 'cpp' },
  { name: 'SQL', icon: 'sql' },
  // Frontend
  { name: 'React.js', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  // Backend & DB
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
];

export const featuredProjects = [
  {
    id: 1,
    title: 'Sudarshan - Travel & Tourism',
    description: 'A responsive full-stack travel platform featuring destination discovery, dynamic safety management, and user-friendly booking workflows.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL'],
    image: sudarshanImg,
    live: '#',
    github: 'https://github.com/Kratiigupta',
    category: 'fullstack',
    features: ['Destination discovery', 'Safety management', 'Booking workflows', 'Responsive design'],
  },
  {
    id: 2,
    title: 'Smart Edu Campus',
    description: 'A comprehensive campus management platform supporting student, faculty, and administrative workflows.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'PostgreSQL'],
    image: smarteduImg,
    live: '#',
    github: 'https://github.com/Kratiigupta',
    category: 'web',
    features: ['Student workflows', 'Faculty management', 'Administrative dashboard', 'Real-time analytics'],
  },
  {
    id: 3,
    title: 'Rudra IDS',
    description: 'An AI-powered intrusion detection system capable of identifying and classifying network attacks using machine learning algorithms.',
    tech: ['Python', 'Machine Learning'],
    image: rudraImg,
    live: '#',
    github: 'https://github.com/Kratiigupta',
    category: 'ai',
    features: ['Anomaly detection', 'Network classification', 'Machine learning', 'Traffic analysis'],
  },
];

export const allProjects = [...featuredProjects];

export const achievements = [
  { icon: 'code', number: 150, suffix: '+', label: 'Problems Solved' },
  { icon: 'folder', number: 3, suffix: '+', label: 'Major Projects' },
  { icon: 'certificate', number: 3, suffix: '', label: 'Research Papers' },
  { icon: 'trophy', number: 5, suffix: '+', label: 'Certifications' },
];

export const commandPaletteItems = [
  { name: 'Projects', icon: '📁', action: '#projects', type: 'navigate' },
  { name: 'All Projects', icon: '🗂️', action: '/projects', type: 'route' },
  { name: 'Certificates', icon: '📜', action: '/certificates', type: 'route' },
  { name: 'Resume', icon: '📄', action: personalInfo.resumeLink, type: 'external' },
  { name: 'Contact', icon: '📧', action: '#contact', type: 'navigate' },
  { name: 'GitHub', icon: '🐙', action: personalInfo.github, type: 'external' },
  { name: 'LinkedIn', icon: '💼', action: personalInfo.linkedin, type: 'external' },
  { name: 'LeetCode', icon: '⚡', action: personalInfo.leetcode, type: 'external' },
  { name: 'HackerRank', icon: '💻', action: personalInfo.hackerrank, type: 'external' },
  { name: 'About', icon: '👤', action: '#about', type: 'navigate' },
  { name: 'Skills', icon: '🛠️', action: '#skills', type: 'navigate' },
];

// Certificates Data
export const certificatesList = [
  {
    id: 1,
    title: 'C++ Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    icon: 'cisco',
    link: '#'
  },
  {
    id: 2,
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    icon: 'cisco',
    link: '#'
  },
  {
    id: 3,
    title: 'AI and Cybersecurity Awareness',
    issuer: 'TCS Foundation',
    category: 'Cybersecurity',
    icon: 'tcs',
    link: '#'
  },
  {
    id: 4,
    title: 'Generative AI Essentials',
    issuer: 'TCS Foundation',
    category: 'AI/ML',
    icon: 'tcs',
    link: '#'
  },
  {
    id: 5,
    title: 'Python for Data Science',
    issuer: 'Infosys Springboard',
    category: 'Data Science',
    icon: 'infosys',
    link: '#'
  },
  {
    id: 6,
    title: 'Software Engineering',
    issuer: 'Infosys Springboard',
    category: 'Engineering',
    icon: 'infosys',
    link: '#'
  },
  {
    id: 7,
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    category: 'Problem Solving',
    icon: 'hackerrank',
    link: 'https://www.hackerrank.com/profile/24116002282_krti'
  },
];

export const researchList = [
  {
    title: 'The Fundamental Theorem of Arithmetic',
    role: 'Presenter',
    event: 'ICNGTSE 2025, PSIT Kanpur',
  },
  {
    title: 'Mathematical Structure of Fibonacci Numbers',
    role: 'Co-Author',
    event: 'ICNGTSE 2025, PSIT Kanpur',
  },
  {
    title: 'AI-Driven Hybrid Intrusion Detection Systems',
    role: 'Ongoing Research',
    event: 'A Comprehensive Survey',
  }
];
