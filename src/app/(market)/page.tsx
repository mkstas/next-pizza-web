import { UiContainer } from '@/components';
import { MarketFilters } from '@/modules/market-filters';

export default function Market() {
  return (
    <UiContainer>
      <div className='max-w-80'>
        <MarketFilters />
      </div>
    </UiContainer>
  );
}
