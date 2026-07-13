import sudarshanImg from '../assets/projects/sudarshan.png';
import smarteduImg from '../assets/projects/smartedu.png';
import rudraImg from '../assets/projects/rudra.png';

export const personalInfo = {
  name: 'Krati Gupta',
  roles: ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'DSA Enthusiast'],
  tagline: 'BCA student with a strong interest in software development and problem-solving. Experienced in building full-stack web applications, participating in hackathons, and engaging in research activities. A quick learner seeking to contribute to real-world projects.',
  email: 'kratigupta.2433353@gmail.com',
  phone: '+91 91257 09300',
  location: 'Unnao, UP',
  education: 'B.C.A.',
  college: 'PSIT College of Higher Education',
  university: 'CSJMU, Kanpur',
  cgpa: '9.0',
  graduationYear: '2027',
  github: 'https://github.com/Kratiigupta',
  githubUsername: 'Kratiigupta',
  linkedin: 'https://linkedin.com/in/krati-gupta25',
  leetcode: 'https://leetcode.com/u/kratii_gupta/',
  hackerrank: 'https://www.hackerrank.com/profile/24116002282_krti',
  resumeLink: import.meta.env.BASE_URL + 'resume_krati.pdf',
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '#contact' },
];

export const aboutBullets = [
  "🎓 BCA Student at PSIT College of Higher Education",
  "💻 Passionate Full-Stack Developer with a focus on scalable web applications",
  "🚀 Active hackathon participant (Smart India Hackathon & Tech Expo 2025)",
  "🔬 Engaged in research activities focusing on AI-driven cybersecurity",
];

export const education = [
  {
    degree: 'B.C.A.',
    institution: 'PSIT College of Higher Education',
    board: 'CSJMU, Kanpur',
    year: '2024 – 2027',
    score: '9.0 CGPA',
    status: 'Current',
  },
  {
    degree: 'Intermediate (XII)',
    institution: 'P.M. Shri Kendriya Vidyalaya',
    board: 'CBSE',
    year: '2024',
    score: '75%',
    status: 'Completed',
  },
  {
    degree: 'High School (X)',
    institution: 'Adarsh Vidya Mandir',
    board: 'CBSE',
    year: '2022',
    score: '84%',
    status: 'Completed',
  },
];

export const timeline = [
  { year: '2022', label: 'High School (84%)' },
  { year: '2024', label: 'Intermediate (75%)' },
  { year: '2025', label: 'Research & Projects' },
  { year: '2027', label: 'BCA Graduation' },
];

// Skills organized by category (matching resume exactly)
export const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'C++', icon: 'SiCplusplus' },
      { name: 'SQL', icon: 'LuDatabase' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss3' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'REST APIs', icon: 'LuServerCog' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Supabase', icon: 'SiSupabase' },
      { name: 'Oracle', icon: 'SiOracle' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
    ],
  },
];

// Flat skills list for backward compatibility
export const skills = skillCategories.flatMap((cat) => cat.skills);

export const coreConceptsList = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Operating Systems',
  'Cybersecurity',
];

export const featuredProjects = [
  {
    id: 1,
    title: 'Sudarshan - Travel & Tourism',
    description: 'A responsive full-stack travel platform featuring destination discovery, dynamic safety management, and user-friendly booking workflows. Built with modern web technologies and a robust backend.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL'],
    image: null,
    live: null,
    github: 'https://github.com/Kratiigupta',
    category: 'fullstack',
    features: ['Destination discovery', 'Dynamic safety management', 'User-friendly booking workflows', 'Responsive design'],
  },
  {
    id: 2,
    title: 'Smart Edu Campus (USCDLE)',
    description: 'A comprehensive campus management platform supporting student, faculty, and administrative workflows. Developed with Next.js and TypeScript for type-safe, scalable architecture.',
    tech: ['Next.js', 'React.js', 'TypeScript', 'PostgreSQL'],
    image: null,
    live: null,
    github: 'https://github.com/Kratiigupta',
    category: 'web',
    features: ['Student workflow management', 'Faculty management', 'Administrative dashboard', 'Scalable architecture'],
  },
  {
    id: 3,
    title: 'Rudra IDS',
    description: 'An AI-powered intrusion detection system capable of identifying and classifying network attacks using machine learning algorithms. Focused on anomaly detection for cybersecurity applications.',
    tech: ['Python', 'Machine Learning', 'Anomaly Detection'],
    image: null,
    live: null,
    github: 'https://github.com/Kratiigupta',
    category: 'ai',
    features: ['AI-powered detection', 'Network attack classification', 'Anomaly detection', 'Traffic analysis'],
  },
];

export const allProjects = [...featuredProjects];

export const achievements = [
  { icon: 'code', number: 150, suffix: '+', label: 'Problems Solved' },
  { icon: 'folder', number: 3, suffix: '', label: 'Research Papers' },
  { icon: 'certificate', number: 7, suffix: '', label: 'Certifications' },
  { icon: 'trophy', number: 3, suffix: '', label: 'Major Projects' },
];

export const achievementHighlights = [
  {
    title: 'Smart India Hackathon (SIH)',
    description: 'Participated in one of India\'s largest hackathons, building innovative solutions for real-world government and industry problems.',
    icon: '🏆',
  },
  {
    title: 'Tech Expo 2025',
    description: 'Showcased projects and technical skills at Tech Expo 2025, demonstrating innovation and problem-solving capabilities.',
    icon: '🚀',
  },
  {
    title: '150+ Problems Solved',
    description: 'Solved 150+ problems across LeetCode and HackerRank covering Data Structures, Algorithms, and Problem Solving.',
    icon: '💡',
  },
  {
    title: 'Hackathon & Competitions',
    description: 'Regular participant in inter-college hackathons, coding competitions, and technical workshops.',
    icon: '⚡',
  },
];

export const commandPaletteItems = [
  { name: 'Projects', icon: '📁', action: '#projects', type: 'navigate' },
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
// Certificates are auto-generated from filenames — see src/data/certificatesGenerated.js
// Run: node scripts/generate-certificates.cjs

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
  },
];

export const leadershipInfo = {
  title: 'Secretary',
  organization: 'Codester Club, PSIT CHE',
  description: 'Spearheaded technical events, team-building activities, and coding sessions to foster a strong developer community within the college.',
};
