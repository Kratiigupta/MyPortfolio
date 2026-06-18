import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skills } from '../data/portfolioData';
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql
} from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';

const iconMap = {
  cpp: { icon: SiCplusplus, color: '#00599C' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  python: { icon: SiPython, color: '#3776AB' },
  sql: { icon: BsFiletypeSql, color: '#F29111' },
  react: { icon: SiReact, color: '#61DAFB' },
  nextjs: { icon: SiNextdotjs, color: '#ffffff' },
  tailwind: { icon: SiTailwindcss, color: '#06B6D4' },
  nodejs: { icon: SiNodedotjs, color: '#339933' },
  postgresql: { icon: SiPostgresql, color: '#4169E1' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  git: { icon: SiGit, color: '#F05032' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Code2 size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => {
            const iconData = iconMap[skill.icon];
            const IconComponent = iconData?.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl p-6 w-28 h-28 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {IconComponent && (
                    <IconComponent
                      size={32}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: iconData.color }}
                    />
                  )}
                  <span className="relative z-10 text-xs font-medium text-gray-400 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
