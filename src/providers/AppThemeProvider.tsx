import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, type ResolvedTheme, type ThemePreference } from '../styles/theme';
import { ThemePreferenceContext } from '../contexts/ThemePreferenceContext';

const STORAGE_KEY = 'theme-preference';

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getInitialPreference(): ThemePreference {
  const storedPreference = localStorage.getItem(STORAGE_KEY);

  return isThemePreference(storedPreference) ? storedPreference : 'system';
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<ThemePreference>(getInitialPreference);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  const resolvedTheme = preference === 'system' ? systemTheme : preference;
  const currentTheme = resolvedTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemePreferenceContext.Provider value={{ preference, setPreference }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}
