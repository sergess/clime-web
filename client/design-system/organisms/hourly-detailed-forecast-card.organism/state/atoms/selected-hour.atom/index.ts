import { atomWithReset } from 'jotai/utils';

export const selectedHourAtom = atomWithReset<string | null>(null);

export default selectedHourAtom;
