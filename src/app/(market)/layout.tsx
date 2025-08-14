import { Container } from '@/components/interface';
import { MarketHeader } from '@/components/modules/market-header';
import { NavigationBar } from '@/components/modules/navigation-bar';

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MarketHeader />
      <NavigationBar />
      <main className='py-8'>
        <Container>{children}</Container>
      </main>
    </>
  );
}
