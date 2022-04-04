import { atom } from 'jotai';

import { RadarLayers } from 'common/types';

export const layersAtom = atom<RadarLayers | null>(null);

export default layersAtom;
