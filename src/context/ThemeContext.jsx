import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  purple: '139 92 246', // #8b5cf6
  blue: '59 130 246',   // #3b82f6
  emerald: '16 185 129',// #10b981
  rose: '244 63 94',    // #f43f5e
};

export const themeHex = {
  purple: '#8b5cf6',
  blue: '#3b82f6',
  emerald: '#10b981',
  rose: '#f43f5e',
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [color, setColor] = useState(localStorage.getItem('color') || 'purple');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--primary', themes[color]);
    localStorage.setItem('color', color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
