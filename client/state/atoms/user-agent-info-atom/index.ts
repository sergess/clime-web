import { atom } from 'jotai';

import { UserAgentInfo } from 'common/types';

export const userAgentInfoAtom = atom<UserAgentInfo>({
  mobile: true,
  iOS: false,
  android: true,
});

export default userAgentInfoAtom;
