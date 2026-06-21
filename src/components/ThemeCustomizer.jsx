import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Moon, Sun, X, Check } from 'lucide-react';
import { useTheme, themes } from '../context/ThemeContext';

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, color, setColor } = useTheme();

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (isOpen && !e.target.closest('#theme-customizer')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <div id="theme-customizer" className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-dark-card border border-white/10 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-lg rounded-full hover:scale-110 transition-transform"
        aria-label="Customize Theme"
      >
        <Palette size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 shadow-2xl rounded-2xl p-5 w-64 origin-bottom-left"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Palette size={16} className="text-primary" />
                Customize
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Dark/Light Toggle */}
            <div className="mb-6">
              <h4 className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider">Mode</h4>
              <div className="flex bg-gray-100 dark:bg-black/20 p-1 rounded-lg">
                <button
                  onClick={() => setTheme('light')}
                  className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-sm rounded-md transition-all ${
                    theme === 'light'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Sun size={14} /> Light
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-sm rounded-md transition-all ${
                    theme === 'dark'
                      ? 'bg-dark-card text-white shadow-sm border border-white/5'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  <Moon size={14} /> Dark
                </button>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h4 className="text-xs text-gray-500 font-medium mb-3 uppercase tracking-wider">Color</h4>
              <div className="flex gap-3">
                {Object.keys(themes).map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: `rgb(${themes[c]})` }}
                  >
                    {color === c && <Check size={14} className="text-white drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
