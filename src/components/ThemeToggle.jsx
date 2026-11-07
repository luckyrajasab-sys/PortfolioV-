import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-wooden-theme');
      if (saved) return saved;
      return 'warm-wood';
    }
    return 'warm-wood';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-wooden-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'warm-wood' ? 'dark' : 'warm-wood'));
  };

  const isNight = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${isNight ? 'warm wooden studio' : 'deep walnut night'} theme`}
      title={`Switch to ${isNight ? 'Warm Wood Studio' : 'Deep Walnut Night'}`}
      type="button"
    >
      {isNight ? (
        <Sun className="theme-icon sun-icon" size={18} />
      ) : (
        <Moon className="theme-icon moon-icon" size={18} />
      )}
    </button>
  );
}
