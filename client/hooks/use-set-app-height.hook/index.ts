import { useEffect } from 'react';

export const useSetAppHeight = (): void => {
  useEffect(() => {
    const setAppHeight = () => {
      const height = window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${height}px`);
    };

    if (window) {
      window.addEventListener('resize', setAppHeight);
      setAppHeight();
    }

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);
};

export default useSetAppHeight;
