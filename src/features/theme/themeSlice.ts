import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThemePreference } from '../../styles/theme';
import type { RootState } from '../../store/store';

const STORAGE_KEY = 'theme-preference';

type ThemeState = {
  preference: ThemePreference;
};

function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getInitialPreference(): ThemePreference {
  const storedPreference = localStorage.getItem(STORAGE_KEY);

  return isThemePreference(storedPreference) ? storedPreference : 'system';
}

const initialState: ThemeState = {
  preference: getInitialPreference(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setPreference(state, action: PayloadAction<ThemePreference>) {
      state.preference = action.payload;
    },
  },
});

export const { setPreference } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
export const selectThemePreference = (state: RootState) => state.theme.preference;
