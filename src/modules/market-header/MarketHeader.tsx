import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CircleUserIcon,
  LogInIcon,
  LogOutIcon,
  MoonIcon,
  ShoppingBagIcon,
  SunIcon,
  UserIcon,
} from 'lucide-react';
import { ROUTES } from '@/shared/config';
import { UiBox, UiButton, UiContainer } from '@/components';

export const MarketHeader: FC = () => {
  return (
    <header className='bg-white py-3 dark:bg-neutral-800'>
      <UiContainer className='relative flex items-center gap-2'>
        <Link href={ROUTES.MARKET} className='flex items-center gap-2'>
          <Image src={'/images/logo.png'} alt='Next pizza logo' width={40} height={40} className='size-10' />
          <div>
            <h1 className='text-xl font-black uppercase'>Next Pizza</h1>
            <p className='leading-2 font-medium text-orange-500'>Вкусней уже некуда</p>
          </div>
        </Link>
        <button className='ml-auto flex size-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-700'>
          <UserIcon size={20} className='size-5 text-orange-500' />
        </button>
        <UiButton className='group relative'>
          <span>1000 ₽</span>
          <span className='h-5 w-0.25 bg-white/50'></span>
          <span className='flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0'>
            <span>0</span>
            <ShoppingBagIcon size={16} className='relative -top-0.25 size-4' />
          </span>
          <ArrowRightIcon
            size={20}
            className='absolute right-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
          />
        </UiButton>
        <UiBox className='absolute top-15 right-3 w-full max-w-60 py-2'>
          <ul>
            <li>
              <Link
                href={ROUTES.ACCOUNT}
                className='flex items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
              >
                <CircleUserIcon size={16} className='size-4 text-orange-500' />
                <span className='font-semibold text-slate-600 dark:text-neutral-400'>Аккаунт</span>
              </Link>
            </li>
            <li>
              <button className='flex w-full cursor-pointer items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'>
                <SunIcon size={16} className='size-4 text-orange-500' />
                <p className='font-semibold text-slate-600 dark:text-neutral-400'>
                  Тема: <span className='text-orange-500'>светлая</span>
                </p>
              </button>
            </li>
            <li>
              <button className='flex w-full cursor-pointer items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'>
                <MoonIcon size={16} className='size-4 text-orange-500' />
                <p className='font-semibold text-slate-600 dark:text-neutral-400'>
                  Тема: <span className='text-orange-500'>темная</span>
                </p>
              </button>
            </li>
            <li>
              <Link
                href={ROUTES.LOGIN}
                className='flex items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
              >
                <LogInIcon size={16} className='size-4 text-orange-500' />
                <span className='font-semibold text-slate-600 dark:text-neutral-400'>Войти</span>
              </Link>
            </li>
            <li>
              <Link
                href={ROUTES.LOGIN}
                className='flex items-center gap-2 px-3 py-2 transition hover:bg-slate-100 dark:hover:bg-neutral-700'
              >
                <LogOutIcon size={16} className='size-4 text-orange-500' />
                <span className='font-semibold text-slate-600 dark:text-neutral-400'>Выйти</span>
              </Link>
            </li>
          </ul>
        </UiBox>
      </UiContainer>
    </header>
  );
};
