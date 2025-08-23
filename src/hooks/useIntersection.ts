import { type RefObject, useEffect } from 'react';

export const useIntersection = (
  ref: RefObject<Element | null>,
  callback: () => void,
  threshold: number,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  });
};
