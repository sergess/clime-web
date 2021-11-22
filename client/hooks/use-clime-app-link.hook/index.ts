import { useMemo } from 'react';
import { isMobile as mobile, isIOS as ios } from 'react-device-detect';

import {
  IOS_STORE_LINK,
  ANDROID_STORE_LINK,
  WEB_FUNNEL_LINK,
} from 'client/constants';

import { useHasMounted } from '../use-has-mounted.hook';

export const useClimeAppLink = (): string => {
  const hasMounted = useHasMounted();

  return useMemo(() => {
    if (!hasMounted) {
      return WEB_FUNNEL_LINK;
    }

    if (mobile) {
      return ios ? IOS_STORE_LINK : ANDROID_STORE_LINK;
    }

    return WEB_FUNNEL_LINK;
  }, [hasMounted, mobile, ios]);
};

export default useClimeAppLink;
