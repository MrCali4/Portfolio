
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full transition-all duration-300 hover:bg-primary/30 hover:scale-110"
      aria-label={`Switch to ${isDark ? 'Professional' : 'Creative'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`}
        />
      </div>
      <span className="sr-only">
        {isDark ? 'Creative Mode' : 'Professional Mode'}
      </span>
    </button>
  );
};
