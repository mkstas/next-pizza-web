import { type RefObject, useEffect } from 'react';

export const useIntersection = (ref: RefObject<Element | null>, callback: () => void) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 0.9 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  });
};
