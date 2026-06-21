import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Building, BookOpen, Award, Users, BookMarked } from 'lucide-react';
import { personalInfo, aboutBullets, education, researchList, leadershipInfo, coreConceptsList } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
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
            <User size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Info Grid (Moved Above) */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <User size={18} />, label: 'Name', value: personalInfo.name },
                  { icon: <GraduationCap size={18} />, label: 'Degree', value: personalInfo.education },
                  { icon: <Building size={18} />, label: 'College', value: personalInfo.college },
                  { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.05]">
                    <span className="text-primary">{info.icon}</span>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{info.label}</div>
                      <div className="text-gray-900 dark:text-white text-sm font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullets instead of heavy text */}
              <ul className="space-y-3 mb-8">
                {aboutBullets.map((bullet, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>{bullet.substring(2)}</span>
                  </li>
                ))}
              </ul>

              {/* Core Concepts - Moved from Skills to declutter */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <BookMarked size={14} className="text-secondary" />
                  Core Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreConceptsList.map((concept) => (
                    <span
                      key={concept}
                      className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-lg"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={16} />
                Education Journey
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="relative pl-6 border-l-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary transition-colors group"
                  >
                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{edu.institution}</p>
                        <p className="text-xs text-gray-500">{edu.board}</p>
                      </div>
                      <div className="text-left sm:text-right mt-1 sm:mt-0">
                        <span className="text-primary text-sm font-semibold">{edu.score}</span>
                        <p className="text-[10px] text-gray-500">{edu.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Research & Leadership */}
          <div className="space-y-6">
            {/* Research Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Research</h3>
              </div>

              <div className="space-y-4">
                {researchList.map((res, i) => (
                  <div key={i} className="group border-l-2 border-gray-200 dark:border-white/10 pl-4 hover:border-secondary dark:hover:border-secondary transition-colors">
                    <h4 className="text-gray-900 dark:text-white text-sm font-medium mb-1 group-hover:text-secondary transition-colors">{res.title}</h4>
                    <p className="text-xs text-gray-500">{res.role} • {res.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Leadership</h3>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                  <Award size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-primary text-sm font-semibold mb-1">
                    {leadershipInfo.title} @ {leadershipInfo.organization}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {leadershipInfo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
