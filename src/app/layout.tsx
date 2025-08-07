import { Nunito } from 'next/font/google';
import '@/shared/assets/index.css';
import { cn } from '@/shared/utils';
import { ThemeProvider, UserProvider } from '@/providers';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
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
        <ThemeProvider>
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
