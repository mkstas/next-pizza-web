'use client';

import type { FC } from 'react';
import { UiContainer } from '@/components';
import { HeaderLogo } from './header-logo/HeaderLogo';
import { HeaderUserButton } from './header-user-button/HeaderUserButton';
import { HeaderCartButton } from './header-cart-button/HeaderCartButton';
import { HeaderMenu } from './header-menu/HeaderMenu';
import { useHeaderMenu } from './useHeaderMenu';

export const MarketHeader: FC = () => {
  const { isOpen, toggleIsOpenMenu } = useHeaderMenu();

  return (
    <header className='bg-white py-3 dark:bg-neutral-800'>
      <UiContainer className='relative'>
        <div className='flex items-center gap-2'>
          <HeaderLogo />
          <div className='ml-auto flex gap-2'>
            <HeaderUserButton onClick={toggleIsOpenMenu} id='header_user_button' />
            <HeaderCartButton />
          </div>
        </div>
        <HeaderMenu isOpen={isOpen} id='header_menu' />
      </UiContainer>
    </header>
  );
};
