import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../context/ThemeContext';

function LanguageBar({ name, percentage, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 min-w-[80px]">{name}</span>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-sm text-gray-500 min-w-[35px] text-right">{percentage}%</span>
    </div>
  );
}

export default function GitHubStats() {
  const { theme, color } = useTheme();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${personalInfo.githubUsername}`)
      .then((res) => res.json())
      .then((data) => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
        });
      })
      .catch(() => {
        setStats({ repos: 15, followers: 10, following: 20 });
      });
  }, []);

  const languages = [
    { name: 'JavaScript', percentage: 40, color: '#F7DF1E' },
    { name: 'Python', percentage: 25, color: '#3776AB' },
    { name: 'C++', percentage: 20, color: '#00599C' },
    { name: 'TypeScript', percentage: 15, color: '#3178C6' },
  ];

  return (
    <section className="py-24 relative">
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
            <Github size={22} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">GitHub Contributions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            {/* Contribution Graph */}
            <div className="overflow-x-auto overflow-y-hidden text-gray-900 dark:text-white pb-2 hide-scrollbar">
              <div className="min-w-[750px]">
                <GitHubCalendar
                  username={personalInfo.githubUsername}
                  colorScheme={theme}
                  blockSize={14}
                  blockMargin={4}
                  fontSize={12}
                />
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-5">Top Languages</h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <LanguageBar key={lang.name} {...lang} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
