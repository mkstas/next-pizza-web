import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Category } from '@prisma/client';
import { categoryService } from '@/services/categories.service';

export const useCategories = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>();

  const onClickCategory = (alias: string) => {
    router.push(`#${alias}`);
  };

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

  return { categories, isLoading, onClickCategory };
};
