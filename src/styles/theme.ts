export type AppTheme = {
  colors: {
    textPrimary: string;
    textContent: string;
    textSecondary: string;
    textTertiary: string;
    textMuted: string;
    surface: string;
    pageBackground: string;
    surfaceMuted: string;
    surfaceAccent: string;
    primary: string;
    primaryHover: string;
    accent: string;
    focus: string;
    border: string;
    danger: string;
    dangerStrong: string;
    success: string;
  };
  spacing: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  radius: {
    s: string;
    m: string;
    l: string;
    pill: string;
  };
  shadows: {
    card: string;
    button: string;
    modal: string;
  };
  breakpoints: {
    tablet: string;
  };
  fonts: {
    primary: string;
  };
};

export const theme: AppTheme = {
  colors: {
    textPrimary: '#1f2937',
    textContent: '#374151',
    textSecondary: '#6b7280',
    textTertiary: '#9c9c9c',
    textMuted: '#dedddd',
    surface: '#ffffff',
    pageBackground: '#f7f7f7',
    surfaceMuted: '#e5e7eb',
    surfaceAccent: '#e7e9ff',
    primary: '#202ed7',
    primaryHover: '#1521cf',
    accent: '#2949ee',
    focus: '#0138f9',
    border: '#d7d7d7',
    danger: '#ff0000',
    dangerStrong: '#d92d20',
    success: '#5d61dc',
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '12px',
    l: '16px',
    xl: '24px',
    xxl: '32px',
  },
  radius: {
    s: '8px',
    m: '12px',
    l: '16px',
    pill: '999px',
  },
  shadows: {
    card: '0 4px 12px rgb(0 0 0 / 8%)',
    button: '0 4px 4px rgb(0 0 0 / 25%)',
    modal: '0 20px 40px rgb(0 0 0 / 20%)',
  },
  breakpoints: {
    tablet: '768px',
  },
  fonts: {
    primary: 'Arial, sans-serif',
  },
};
