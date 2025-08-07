'use client';

import type { FC } from 'react';
import { UiContainer } from '@/components';
import { HeaderLogo } from './header-logo/HeaderLogo';
import { HeaderUserButton } from './header-user-button/HeaderUserButton';
import { HeaderCartButton } from './header-cart-button/HeaderCartButton';
import { HeaderMenu } from './header-menu/HeaderMenu';
import { useHeaderMenu } from './useHeaderMenu';
import { HeaderCategories } from './header-categories/HeaderCategories';

export const MarketHeader: FC = () => {
  const { isOpen, toggleIsOpenMenu } = useHeaderMenu();

  return (
    <header className='sticky top-0 left-0 z-10 w-full bg-white dark:bg-neutral-800'>
      <UiContainer>
        <div className='relative pt-3'>
          <div className='flex items-center gap-2'>
            <HeaderLogo />
            <div className='ml-auto flex gap-2'>
              <HeaderUserButton onClick={toggleIsOpenMenu} id='header_user_button' />
              <HeaderCartButton />
            </div>
          </div>
          <HeaderMenu isOpen={isOpen} id='header_menu' />
        </div>
        <div className='mt-2'>
          <HeaderCategories />
        </div>
      </UiContainer>
    </header>
  );
};
