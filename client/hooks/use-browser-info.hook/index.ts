import { useContext } from 'react';

import { AppConfigContext } from 'client/state/contexts';
import { DEVICE_TYPE, OS_NAME } from 'client/constants';

import { UseBrowserInfoReturnValue } from './types';

export const useBrowserInfo = (): UseBrowserInfoReturnValue => {
  const { browserInfo } = useContext(AppConfigContext);

  return {
    mobile: browserInfo?.deviceType === DEVICE_TYPE.MOBILE,
    ios: browserInfo?.osName === OS_NAME.iOS,
    android: browserInfo?.osName === OS_NAME.ANDROID,
  };
};

export default useBrowserInfo;
