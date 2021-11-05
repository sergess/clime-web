import { useEffect } from 'react';

export const useOverflowCondition = () => {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'auto';
    };
  }, []);
};

export default useOverflowCondition;
