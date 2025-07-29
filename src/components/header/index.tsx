import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Container } from '@/shared';
import { cn } from '@/lib/utils';
import { SearchInput } from './SearchInput';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-accent border-b', className)}>
      <Container className="flex items-center gap-8 py-8">
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
          <Button className="group relative" size={'lg'}>
            <span className="font-bold">520 ₽</span>
            <span className="mx-3 h-6 w-0.25 bg-white/30" />
            <span className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} className="relative mr-1" strokeWidth={2} />
              <span className="font-bold">3</span>
            </span>
            <ArrowRight
              size={20}
              className="absolute right-7 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </Button>
        </div>
      </Container>
    </header>
  );
};
