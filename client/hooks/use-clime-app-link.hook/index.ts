import { useMemo } from 'react';
import { isMobile as mobile, isIOS as ios } from 'react-device-detect';

import { IOS_STORE_LINK, ANDROID_STORE_LINK, APP } from 'client/constants';

import { useHasMounted } from '../use-has-mounted.hook';

export const useClimeAppLink = (): string => {
  const hasMounted = useHasMounted();

  return useMemo(() => {
    if (!hasMounted) {
      return `/${APP}`;
    }

    if (mobile) {
      return ios ? IOS_STORE_LINK : ANDROID_STORE_LINK;
    }

    return `/${APP}`;
  }, [hasMounted, mobile, ios]);
};

export default useClimeAppLink;
