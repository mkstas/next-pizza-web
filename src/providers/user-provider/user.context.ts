'use client';

import { createContext } from 'react';
import type { UserContextState } from './user.interface';

export const UserContext = createContext<UserContextState | null>(null);
