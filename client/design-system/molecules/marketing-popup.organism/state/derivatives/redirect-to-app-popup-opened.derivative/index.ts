import { atom } from 'jotai';
import { isSameDay } from 'date-fns';

import { lastTimePopupOpened } from '../../atoms';

export const redirectToAppPopupOpened = atom(
  (get) => {
    const lastTimeOpened = get(lastTimePopupOpened);

    return !lastTimeOpened || !isSameDay(lastTimeOpened, new Date());
  },
  (_, set, opened) => {
    if (!opened) {
      set(lastTimePopupOpened, +new Date());
    }
  }
);

export default redirectToAppPopupOpened;
