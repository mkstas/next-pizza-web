import { Nunito } from 'next/font/google';
import { cn } from '@/shared/utils';
import '@/shared/assets/index.css';
import { UserProvider } from '@/providers';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </head>
      <body className={cn('bg-slate-50 text-slate-900 dark:bg-neutral-900 dark:text-white', nunito.className)}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
