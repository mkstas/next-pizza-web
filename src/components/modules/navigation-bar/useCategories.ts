import { useEffect, useState } from 'react';
import { Category } from '@prisma/client';
import { categoryService } from '@/services/categories.service';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>();

  const fetchData = async () => {
    try {
      const categories = await categoryService.findAll();
      setCategories(categories);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { categories, isLoading };
};
