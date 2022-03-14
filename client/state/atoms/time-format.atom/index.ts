import { atomWithStorage } from 'jotai/utils';

import { TIME_FORMAT_STORAGE_PREFIX } from 'client/constants';
import { TimeFormat } from 'client/types';

export const timeFormatAtom = atomWithStorage<TimeFormat>(
  TIME_FORMAT_STORAGE_PREFIX,
  TimeFormat.H12
);

export default timeFormatAtom;
