import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { forecastItemsAtom } from '../forecast-items-atom.derivative';

export const forecastAtomFamily = atomFamily((index: number) =>
  atom((get) => get(forecastItemsAtom)[index])
);

export default forecastAtomFamily;
