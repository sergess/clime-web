import { atomWithReset } from 'jotai/utils';

export const selectedDateTimeAtom = atomWithReset<string | null>(null);

export default selectedDateTimeAtom;
