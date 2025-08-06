'use client';

import { createContext } from 'react';
import type { ThemeContextState } from './theme.interface';

export const ThemeContext = createContext<ThemeContextState>({ theme: 'light', toggleTheme: () => {} });
