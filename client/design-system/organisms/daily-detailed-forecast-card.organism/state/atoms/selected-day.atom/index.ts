import { atomWithReset } from 'jotai/utils';

export const selectedDayAtom = atomWithReset<string | null>(null);

export default selectedDayAtom;
