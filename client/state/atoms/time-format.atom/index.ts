import { atomWithStorage } from 'jotai/utils';

import { TIME_FORMATS, TIME_FORMAT } from 'client/constants';
import { TimeFormat } from 'client/types';

export const timeFormatAtom = atomWithStorage<TimeFormat>(
  TIME_FORMAT,
  TIME_FORMATS.H12
);

export default timeFormatAtom;
