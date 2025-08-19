import { MoonIcon, SunIcon } from 'lucide-react';
import { type FC, memo } from 'react';
import { type Theme } from '@/providers/theme.provider';
import { Button } from '@/components/interface';

interface Props {
  theme?: Theme;
  onClick?: () => void;
}

const Component: FC<Props> = ({ theme = 'light', onClick }) => {
  return (
    <Button onClick={onClick} variant='ghost' geometry='square'>
      {theme === 'light' ? (
        <SunIcon size={20} className='text-yellow-500' />
      ) : (
        <MoonIcon size={20} className='text-purple-500' />
      )}
    </Button>
  );
};

export const HeaderTheme = memo(Component);
