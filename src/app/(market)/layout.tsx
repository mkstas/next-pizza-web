import { CategoryProvider } from '@/providers/category.provider';
import { Container } from '@/components/interface';
import { MarketHeader } from '@/components/modules/market-header';
import { NavigationBar } from '@/components/modules/navigation-bar';

export default function MarketLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <MarketHeader />
      <CategoryProvider>
        <NavigationBar />
        <main className='py-8'>
          <Container>
            {modal}
            {children}
          </Container>
        </main>
      </CategoryProvider>
    </>
  );
}
