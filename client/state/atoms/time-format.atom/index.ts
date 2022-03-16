import { atomWithStorage } from 'jotai/utils';

import { TIME_FORMAT } from 'client/constants/local-storage-names.constant';
import { TimeFormat } from 'client/types';

export const timeFormatAtom = atomWithStorage<TimeFormat>(
  TIME_FORMAT,
  TimeFormat.H12
);

export default timeFormatAtom;
