import { MarketHeader } from '@/modules/market-header';

export default function MarketLyaout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MarketHeader />
      {children}
    </>
  );
}
