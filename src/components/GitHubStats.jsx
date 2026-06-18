import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Generate a mock contribution graph for visual display
function ContributionGraph() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', '', 'Wed', '', 'Fri'];

  // Generate deterministic-looking mock data
  const cells = useMemo(() => {
    const result = [];
    for (let week = 0; week < 52; week++) {
      for (let day = 0; day < 7; day++) {
        // Create a pattern that looks organic
        const seed = (week * 7 + day) * 2654435761;
        const hash = ((seed >>> 0) % 100);
        let level = 0;
        if (hash > 75) level = 4;
        else if (hash > 55) level = 3;
        else if (hash > 35) level = 2;
        else if (hash > 20) level = 1;
        result.push(level);
      }
    }
    return result;
  }, []);

  const levelColors = [
    'bg-white/[0.03]',
    'bg-primary/20',
    'bg-primary/40',
    'bg-primary/60',
    'bg-primary/80',
  ];

  return (
    <div className="overflow-x-auto">
      {/* Month labels */}
      <div className="flex mb-2 ml-10">
        {months.map((m) => (
          <span key={m} className="text-[10px] text-gray-600 flex-1">{m}</span>
        ))}
      </div>
      {/* Grid */}
      <div className="flex gap-0.5">
        {/* Day labels */}
        <div className="flex flex-col gap-0.5 mr-2 justify-around">
          {days.map((d, i) => (
            <span key={i} className="text-[10px] text-gray-600 h-[10px] leading-[10px]">{d}</span>
          ))}
        </div>
        {/* Cells grid - 52 columns x 7 rows */}
        <div className="flex gap-[3px]">
          {Array.from({ length: 52 }, (_, week) => (
            <div key={week} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, day) => {
                const idx = week * 7 + day;
                const level = cells[idx] || 0;
                return (
                  <div
                    key={day}
                    className={`w-[10px] h-[10px] rounded-[2px] ${levelColors[level]} transition-colors`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
    { name: 'JavaScript', percentage: 45, color: '#F7DF1E' },
    { name: 'C++', percentage: 30, color: '#00599C' },
    { name: 'Java', percentage: 15, color: '#ED8B00' },
    { name: 'Python', percentage: 10, color: '#3776AB' },
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
            <div>
              <ContributionGraph />
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
