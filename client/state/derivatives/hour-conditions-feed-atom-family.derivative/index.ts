import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { hourConditionsFeedAtom } from '../hour-conditions-feed-atom.derivative';

export const hourConditionsFeedAtomFamily = atomFamily((index: number) =>
  atom((get) => get(hourConditionsFeedAtom)[index])
);

export default hourConditionsFeedAtomFamily;
