import { atom } from 'jotai';

import { ForecaPid } from 'common/types';

export const forecaPidAtom = atom<ForecaPid | null>(null);

export default forecaPidAtom;
