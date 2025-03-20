
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem('cashlance-theme') as Theme | null;
    return storedTheme || 'system';
  });

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Calculate effective theme (what's actually applied)
  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initial check
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    
    // Add listener for system theme changes
    const listener = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('cashlance-theme', theme);
    
    // Apply theme to HTML element
    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [theme, effectiveTheme]);

  return {
    theme,
    systemTheme,
    effectiveTheme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
    toggleTheme: () => {
      setTheme(prev => {
        if (prev === 'system') {
          return systemTheme === 'dark' ? 'light' : 'dark';
        }
        return prev === 'dark' ? 'light' : 'dark';
      });
    }
  };
}
