import { atom } from 'jotai';

import { MapStyle } from 'client/design-system/organisms/radar.organism/types';

export const mapStyleAtom = atom<MapStyle>(MapStyle.MAP);

export default mapStyleAtom;
