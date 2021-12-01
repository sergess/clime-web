import { useEffect } from 'react';

export const useOverflowCondition = () => {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    return () => {
      body.style.overflow = 'auto';
      body.style.touchAction = 'auto';
    };
  }, []);
};

export default useOverflowCondition;
