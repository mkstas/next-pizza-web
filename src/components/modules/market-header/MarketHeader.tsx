'use client';

import type { FC } from 'react';
import { ROUTES } from '@/config/constants';
import { useAuthContext } from '@/providers/auth.provider';
import { useThemeContext } from '@/providers/theme.provider';
import { HeaderAuth, HeaderLogo, HeaderTheme } from '@/components/elements/header';
import { Container } from '@/components/interface';

export const MarketHeader: FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { isLoading, isLoggedIn } = useAuthContext();

  return (
    <header className='border-b border-b-slate-200 bg-white py-4 dark:border-b-neutral-700 dark:bg-neutral-800'>
      <Container className='flex gap-2'>
        <HeaderLogo href={ROUTES.MARKET} />
        <div className='ml-auto flex gap-2'>
          <HeaderTheme theme={theme} onClick={toggleTheme} />
          <HeaderAuth isLoading={isLoading} isLoggedIn={isLoggedIn} />
        </div>
      </Container>
    </header>
  );
};
