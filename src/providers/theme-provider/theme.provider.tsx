'use client';

import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { Theme } from './theme.interface';
import { ThemeContext } from './theme.context';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || 'light');
    document.documentElement.dataset.theme = theme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
