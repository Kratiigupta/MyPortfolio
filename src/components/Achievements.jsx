import { motion } from 'framer-motion';
import { Trophy, FolderOpen, Award, Code2 } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { achievements } from '../data/portfolioData';

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, i) => (
            <StatCard key={achievement.label} achievement={achievement} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
