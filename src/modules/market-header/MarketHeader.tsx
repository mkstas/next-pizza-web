import type { FC } from 'react';
import { UiContainer } from '@/components';
import { HeaderLogo } from './header-logo';
import { HeaderAccountButton } from './header-account-button';
import { HeaderCartButton } from './header-cart-button';

export const MarketHeader: FC = () => {
  return (
    <header className='bg-white py-3 dark:bg-neutral-800'>
      <UiContainer className='relative flex items-center gap-2'>
        <HeaderLogo />
        <div className='ml-auto flex gap-2'>
          <HeaderAccountButton />
          <HeaderCartButton />
        </div>
      </UiContainer>
    </header>
  );
};
