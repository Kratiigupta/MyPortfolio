import { motion } from 'framer-motion';
import { Trophy, FolderOpen, Award, Code2, ArrowRight } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { achievements, achievementHighlights } from '../data/portfolioData';

const iconMap = {
  trophy: Trophy,
  folder: FolderOpen,
  certificate: Award,
  code: Code2,
};

function StatCard({ achievement, index }) {
  const { count, ref } = useCountUp(achievement.number, 1500);
  const Icon = iconMap[achievement.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
    >
      <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
        {Icon && <Icon size={24} />}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count}{achievement.suffix}
      </div>
      <div className="text-sm text-gray-500">{achievement.label}</div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
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
            <Trophy size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {achievements.map((achievement, i) => (
            <StatCard key={achievement.label} achievement={achievement} index={i} />
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="grid sm:grid-cols-2 gap-4">
          {achievementHighlights.map((highlight, i) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{highlight.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Certificates Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#/certificates"
            className="group flex items-center gap-2 px-6 py-3 border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-white/5 hover:border-primary/50 transition-all duration-300 hover:text-white"
          >
            View All 10 Certifications
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
