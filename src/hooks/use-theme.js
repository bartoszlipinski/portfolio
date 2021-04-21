import { useState, useEffect } from 'react';

export default function useTheme() {
  const stored = localStorage.getItem('theme');
  const [theme, setTheme] = useState(stored !== 'dark' && stored !== 'light' ? 'light' : stored);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return { theme, toggleTheme };
}
