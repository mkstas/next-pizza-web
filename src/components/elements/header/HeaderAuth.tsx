import { LogInIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { type FC, memo } from 'react';
import { ROUTES } from '@/config/constants';
import { Button, ButtonLink, Skeleton } from '@/components/interface';

interface Props {
  isLoading?: boolean;
  isLoggedIn?: boolean;
}

const Component: FC<Props> = ({ isLoading, isLoggedIn }) => {
  if (isLoading) {
    return <Skeleton className='size-10 rounded-lg' />;
  }

  if (isLoggedIn) {
    return (
      <>
        <ButtonLink href={ROUTES.ACCOUNT} variant='ghost' geometry='square'>
          <UserIcon size={20} className='text-orange-500' />
        </ButtonLink>
        <Button variant='ghost' geometry='square'>
          <LogOutIcon size={20} className='text-orange-500' />
        </Button>
      </>
    );
  }

  return (
    <ButtonLink href={ROUTES.LOGIN} variant='ghost'>
      <span className='font-semibold'>Войти</span>
      <LogInIcon size={20} className='text-orange-500' />
    </ButtonLink>
  );
};

export const HeaderAuth = memo(Component);
