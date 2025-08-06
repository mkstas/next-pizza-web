'use client';

import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { User } from './user.interface';
import { UserContext } from './user.context';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      id: '1',
      name: 'Cage',
      phoneNumber: '79000000000',
      role: 'user',
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
