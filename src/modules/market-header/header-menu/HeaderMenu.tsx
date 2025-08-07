'use client';

import { useContext, type FC } from 'react';
import { UiBox } from '@/components';
import { cn } from '@/shared/utils';
import { UserContext } from '@/providers';
import { MenuAccount } from './MenuAccount';
import { MenuTheme } from './MenuTheme';
import { MenuLogin } from './MenuLogin';

interface Props {
  id?: string;
  isOpen: boolean;
}

export const HeaderMenu: FC<Props> = ({ id, isOpen }) => {
  const { isLoggedIn, isLoading } = useContext(UserContext);

  return (
    <UiBox
      id={id}
      className={cn(
        'absolute top-16 right-0 w-full max-w-60 border border-slate-200 py-2 transition dark:border-neutral-700',
        isOpen && 'visible -translate-y-1 opacity-100',
        !isOpen && 'pointer-events-none invisible opacity-0',
      )}
    >
      <ul>
        <li>
          <MenuAccount isLoading={isLoading} isLoggedIn={isLoggedIn} />
        </li>
        <li>
          <MenuTheme isLoading={isLoading} />
        </li>
        <li>
          <MenuLogin isLoading={isLoading} isLoggedIn={isLoggedIn} />
        </li>
      </ul>
    </UiBox>
  );
};
