import { ArrowUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={cn('bg-secondary inline-flex cursor-pointer items-center gap-1 rounded-md px-5 py-3', className)}
    >
      <ArrowUpDown size={16} className="text-secondary-foreground" />
      <span className="font-bold">Сортировка:</span>
      <span className="text-primary font-bold">популярное</span>
    </button>
  );
};
