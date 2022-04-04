import { useMemo } from 'react';
import { isMobile as mobile, isIOS as ios } from 'react-device-detect';

import { IOS_STORE_LINK, ANDROID_STORE_LINK, APP } from 'client/constants';

import { useHasMounted } from '../use-has-mounted.hook';

export const useClimeAppLink = (
  iosStoreLink = IOS_STORE_LINK,
  androidStoreLink = ANDROID_STORE_LINK
): string => {
  const hasMounted = useHasMounted();

  return useMemo(() => {
    if (!hasMounted) {
      return `/${APP}`;
    }

    if (mobile) {
      return ios ? iosStoreLink : androidStoreLink;
    }

    return `/${APP}`;
  }, [hasMounted, mobile, ios]);
};

export default useClimeAppLink;
