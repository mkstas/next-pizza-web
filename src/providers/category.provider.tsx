'use client';

import { createContext, type FC, type PropsWithChildren, useContext, useState } from 'react';

interface CategoryContextType {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<string>('');

  return (
    <CategoryContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  return { ...context };
};
