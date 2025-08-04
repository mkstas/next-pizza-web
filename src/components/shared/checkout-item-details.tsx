import { cn } from '@/lib/utils';
import { FC } from 'react';

interface Props {
  title?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
}

export const CheckoutItemDetails: FC<Props> = ({ className, title, value }) => {
  return (
    <div className={cn('my-4 flex', className)}>
      <div className="flex flex-1 text-lg">
        {title}
        <div className="border-b-secondary relative -top-1 mx-2 flex-1 border-b border-dashed" />
      </div>
      <span className="text-lg font-bold">{value} ₽</span>
    </div>
  );
};
