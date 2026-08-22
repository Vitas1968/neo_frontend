import { createContext, useContext } from 'react';
import type { ThemePreference } from '../styles/theme';

type ThemePreferenceContextValue = {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
};

export const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(null);

export function useThemePreference() {
  const context = useContext(ThemePreferenceContext);

  if (!context) {
    throw new Error('useThemePreference must be used within AppThemeProvider');
  }

  return context;
}
