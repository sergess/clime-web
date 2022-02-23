import { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export const useScreenWidthSmallerThan = (breakpoint: string): boolean => {
  const [widthSmallerThan, setWidthSmallerThan] = useState(true);
  const [widthLargerThan] = useMediaQuery(`(min-width: ${breakpoint})`);

  useEffect(() => {
    setWidthSmallerThan(!widthLargerThan);
  }, [widthLargerThan]);

  return widthSmallerThan;
};

export default useScreenWidthSmallerThan;
