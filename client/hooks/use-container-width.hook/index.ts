import { useEffect, useState, RefObject } from 'react';

export const useContainerWidth = (
  elementRef: RefObject<HTMLDivElement>
): number => {
  const getElementWidth = () =>
    (elementRef.current && elementRef.current.offsetWidth) || 0;

  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setElementWidth(getElementWidth());
    };

    if (elementRef.current) {
      setElementWidth(getElementWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [elementRef.current]);

  return elementWidth;
};

export default useContainerWidth;
