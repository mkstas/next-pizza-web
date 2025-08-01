import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SearchInput } from './search-input';
import { Button } from '../ui/button';
import { Container } from '@/components/shared/container';
import { CartButton } from './cart-button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-accent border-b py-4', className)}>
      <Container className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Next Pizza Logo" width={36} height={36} />
          <div>
            <h1 className="uppecase text-2xl font-black">Next Pizza</h1>
            <p className="text-primary text-sm leading-2">Вкусней уже некуда</p>
          </div>
        </Link>
        <SearchInput className="flex-1" />
        <div className="flex items-center gap-2">
          <Button variant={'outline'} size={'lg'}>
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
