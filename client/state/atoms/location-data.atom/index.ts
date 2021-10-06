import { atom } from 'jotai';

import { LocationData } from 'common/types';

export const locationDataAtom = atom<LocationData | null>(null);

export default locationDataAtom;
