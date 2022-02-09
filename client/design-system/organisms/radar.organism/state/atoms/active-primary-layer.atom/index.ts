import { atom } from 'jotai';

import { PrimaryLayerId } from 'client/design-system/organisms/radar.organism/types';

import { RadarLayerId } from 'common/types';

// [todo] set 0 as active frame index on change primary layer
export const activePrimaryLayerAtom = atom<PrimaryLayerId>(RadarLayerId.RADAR);

export default activePrimaryLayerAtom;
