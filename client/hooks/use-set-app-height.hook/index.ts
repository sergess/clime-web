import { useEffect, useState } from 'react';

export const useSetAppHeight = (): number => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const setAppHeight = () => setHeight(window.innerHeight);

    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  return height;
};

export default useSetAppHeight;
