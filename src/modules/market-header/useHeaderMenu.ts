import { useEffect, useState } from 'react';

export const useHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickOutMenu = (e: MouseEvent) => {
    console.log(1);
    if (
      !(e.target as HTMLElement).closest('#header_user_button') &&
      !(e.target as HTMLElement).closest('#header_menu')
    ) {
      setIsOpen(false);
      window.removeEventListener('mousedown', onClickOutMenu);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', onClickOutMenu);
    }
  }, [isOpen]);

  return { isOpen, setIsOpen, toggleIsOpenMenu };
};
