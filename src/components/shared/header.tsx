import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="uppecase text-2xl font-black">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">Вкусней уже некуда</p>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>520 ₽</b>
              <span className="mx-3 h-full w-[1px] bg-white/30" />
              <span className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </span>
              <ArrowRight
                size={20}
                className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
