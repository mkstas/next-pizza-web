'use client';

import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import type { User } from './user.interface';
import { UserContext } from './user.context';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const promise: Promise<User> = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: '1',
        name: 'Nicolas Cage',
        phoneNumber: '79000000000',
        role: 'user',
      });
    }, 2000);
  });

  useEffect(() => {
    promise
      .then(res => {
        setUser(res);
        setIsLoggedIn(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return <UserContext.Provider value={{ user, isLoggedIn, isLoading }}>{children}</UserContext.Provider>;
};
