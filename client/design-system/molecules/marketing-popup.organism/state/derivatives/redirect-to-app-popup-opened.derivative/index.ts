import { atom } from 'jotai';
import { differenceInHours } from 'date-fns';

import { lastTimePopupOpened } from '../../atoms';

export const redirectToAppPopupOpened = atom(
  (get) => {
    const lastTimeOpened = get(lastTimePopupOpened);

    return (
      !lastTimeOpened || differenceInHours(new Date(), lastTimeOpened) >= 12
    );
  },
  (_, set, opened) => {
    if (!opened) {
      set(lastTimePopupOpened, +new Date());
    }
  }
);

export default redirectToAppPopupOpened;
