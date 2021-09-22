import { atom } from 'jotai';

import { forecastFeedAtom } from 'client/state/atoms';
import { selectConversionsAwareCurrentConditionAtom } from 'client/state/selectors';

import { CurrentCondition } from 'common/types';

export const currentConditionAtom = selectConversionsAwareCurrentConditionAtom(
  atom<CurrentCondition>(
    (get) => get(forecastFeedAtom)?.cur ?? ({} as CurrentCondition)
  )
);

export default currentConditionAtom;
