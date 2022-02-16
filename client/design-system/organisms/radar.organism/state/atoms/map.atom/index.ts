import { atom } from 'jotai';
import type { Map } from 'leaflet';

export const mapAtom = atom<Map | null>(null);

export default mapAtom;
