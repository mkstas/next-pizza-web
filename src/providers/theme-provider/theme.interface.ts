export type Theme = 'light' | 'dark';

export interface ThemeContextState {
  theme: Theme;
  toggleTheme: () => void;
}
