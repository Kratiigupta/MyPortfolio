import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolioData';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.roles, 120, 60, 1800);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(128,128,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-lg">👋</span>
            <span className="text-primary text-sm font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Krati{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gupta
            </span>
          </h1>

          {/* Typing effect */}
          <div className="text-2xl md:text-3xl font-semibold text-primary mb-6 h-10">
            <span>{typedText}</span>
            <span className="animate-typing-cursor text-primary">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-purple-600 text-pure-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={personalInfo.resumeLink}
              download="resume_krati.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 border border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 hover:border-gray-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={20} />, href: personalInfo.github, label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <SiLeetcode size={20} />, href: personalInfo.leetcode, label: 'LeetCode' },
              { icon: <SiHackerrank size={20} />, href: personalInfo.hackerrank, label: 'HackerRank' },
              { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 dark:hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-2xl animate-glow-pulse" />
            
            {/* Image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img
                src={profileImg}
                alt="Krati Gupta"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 backdrop-blur-sm flex items-center justify-center text-2xl"
            >
              💻
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-8 w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/30 backdrop-blur-sm flex items-center justify-center text-xl"
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
