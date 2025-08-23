import type { FC } from 'react';

type ChooseProductVariant = {
  title: string;
  value: string;
};

interface Props {
  productVariantsGroup: ChooseProductVariant[][];
}

export const ProductVariant: FC<Props> = ({ productVariantsGroup }) => {
  return (
    <div className='space-y-1'>
      {productVariantsGroup.map((item, index) => (
        <div key={index} className='flex gap-1 rounded-md bg-slate-200 p-1'>
          {item.map(item => (
            <button
              key={item.value}
              className='flex-1 cursor-pointer rounded-sm bg-white px-2 py-1 font-semibold text-orange-500'
            >
              {item.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
