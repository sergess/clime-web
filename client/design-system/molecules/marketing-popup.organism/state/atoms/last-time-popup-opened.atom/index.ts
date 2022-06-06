import { atomWithStorage } from 'jotai/utils';

import { LAST_TIME_POPUP_OPENED } from 'client/constants';

export const lastTimePopupOpened = atomWithStorage<null | number>(
  LAST_TIME_POPUP_OPENED,
  null
);

export default lastTimePopupOpened;
