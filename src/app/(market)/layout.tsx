import { Header } from '@/components/shared/header';

export default function MarketLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {modal}
    </>
  );
}
