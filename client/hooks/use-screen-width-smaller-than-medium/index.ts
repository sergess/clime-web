import { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

import climeTheme from 'client/theme';

export const useScreenWidthSmallerThanMedium = (): boolean => {
  const [widthSmallerThanMedium, setWidthSmallerThanMedium] = useState(true);
  const [widthLargerThanMedium] = useMediaQuery(
    `(min-width: ${climeTheme.breakpoints.md})`
  );

  useEffect(() => {
    setWidthSmallerThanMedium(!widthLargerThanMedium);
  }, [widthLargerThanMedium]);

  return widthSmallerThanMedium;
};

export default useScreenWidthSmallerThanMedium;
