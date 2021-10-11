import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { dayConditionsFeedAtom } from '../day-conditions-feed-atom.derivative';

export const dayConditionsFeedAtomFamily = atomFamily((index: number) =>
  atom((get) => get(dayConditionsFeedAtom)[index])
);

export default dayConditionsFeedAtomFamily;
