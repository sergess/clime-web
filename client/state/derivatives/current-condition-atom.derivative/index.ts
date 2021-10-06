import { atom } from 'jotai';

import { forecastFeedAtom } from 'client/state/atoms';
import { selectConversionsAwareConditionAtom } from 'client/state/selectors';

import { Condition } from 'common/types';

// [TODO] Cast to HourlyCondition type
export const currentConditionAtom = selectConversionsAwareConditionAtom(
  atom<Condition>((get) => get(forecastFeedAtom)?.cur ?? ({} as Condition))
);

export default currentConditionAtom;
