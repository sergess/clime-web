import { useAtomValue } from 'jotai/utils';

import {
  IOS_STORE_LINK,
  ANDROID_STORE_LINK,
  WEB_FUNNEL_LINK,
} from 'client/constants';
import { userAgentInfoAtom } from 'client/state/atoms';

export const useClimeAppLink = (): string => {
  const userAgentInfo = useAtomValue(userAgentInfoAtom);

  if (userAgentInfo?.mobile) {
    return userAgentInfo?.iOS ? IOS_STORE_LINK : ANDROID_STORE_LINK;
  }

  return WEB_FUNNEL_LINK;
};

export default useClimeAppLink;
