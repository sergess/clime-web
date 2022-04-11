import { useEffect, useState } from 'react';

export const useWindowDimensions = (): { [key: string]: number } => {
  const [dimensions, setDimensions] = useState({
    innerHeight: 0,
    innerWidth: 0,
  });

  useEffect(() => {
    const setAppHeight = () =>
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerHeight,
      });

    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  return dimensions;
};

export default useWindowDimensions;
