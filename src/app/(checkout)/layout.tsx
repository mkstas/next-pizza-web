import { Header } from '@/components/shared/header';

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-secondary min-h-screen">
      <Header hasSearch={false} hasCart={false} />
      {children}
    </main>
  );
}
