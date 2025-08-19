import Image from 'next/image';
import Link from 'next/link';
import { type FC, memo } from 'react';

interface Props {
  href: string;
}

const Component: FC<Props> = ({ href }) => {
  return (
    <Link href={href} className='flex items-center gap-2'>
      <Image
        src={'/images/logo.png'}
        alt='Next pizza logo'
        width={40}
        height={40}
        className='size-10'
      />
      <div>
        <h1 className='text-xl font-black uppercase'>Next Pizza</h1>
        <p className='leading-2 font-medium text-orange-500 dark:text-orange-500'>
          Вкусней уже некуда
        </p>
      </div>
    </Link>
  );
};

export const HeaderLogo = memo(Component);
