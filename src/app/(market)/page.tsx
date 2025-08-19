import { MarketFilters } from '@/components/modules/market-filters';
import { MarketProducts } from '@/components/modules/market-products';

export default function MarketPage() {
  return (
    <div className='grid grid-cols-[1fr_3fr] items-start gap-16'>
      <MarketFilters />
      <MarketProducts />
    </div>
  );
}
