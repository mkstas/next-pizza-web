import { Nunito } from 'next/font/google';
import { cn } from '@/utils/cn';
import { AuthProvider } from '@/providers/auth.provider';
import { ThemeProvider } from '@/providers/theme.provider';
import './main.css';

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
      <body
        className={cn(
          'bg-slate-50 text-slate-900 dark:bg-neutral-900 dark:text-white',
          nunito.className,
        )}
      >
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
