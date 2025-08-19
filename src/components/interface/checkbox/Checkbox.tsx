import { CheckIcon } from 'lucide-react';
import { FC, InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox: FC<Props> = ({ className, id, label, ...props }) => {
  return (
    <div className={cn('relative flex', className)}>
      <input
        type='checkbox'
        id={id}
        className='peer mt-1 size-5 shrink-0 cursor-pointer appearance-none rounded-md bg-slate-200 checked:bg-orange-500 dark:bg-neutral-700'
        {...props}
      />
      <label htmlFor={id} className='flex-1 cursor-pointer pl-2 text-lg'>
        {label}
      </label>
      <CheckIcon
        size={16}
        className='pointer-events-none absolute top-1.5 left-0.5 hidden stroke-white peer-checked:block'
      />
    </div>
  );
};
