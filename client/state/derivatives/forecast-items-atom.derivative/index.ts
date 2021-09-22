import { atom, Atom } from 'jotai';
import { splitAtom, selectAtom } from 'jotai/utils';

import { forecastFeedAtom } from 'client/state/atoms';
import {
  selectConversionsAwareCurrentConditionAtom,
  selectConversionsAwareDayConditionAtom,
  selectConversionsAwareDaySummaryConditionAtom,
} from 'client/state/selectors';

import {
  CurrentCondition,
  DayCondition,
  DaySummaryCondition,
} from 'common/types';

const frstAtom = atom<DayCondition[]>(
  (get) => get(forecastFeedAtom)?.frst ?? []
);

const forecastAtomsAtom = splitAtom(frstAtom);

export const forecastItemsAtom = atom<DayCondition[]>((get) =>
  get(forecastAtomsAtom).map((forecastAtom) => {
    const forecast = get(forecastAtom);

    const hourlyListAtom = selectAtom(forecastAtom, ({ hly }) => hly);
    const hourlyAtomsAtom = splitAtom(hourlyListAtom);
    const hourlyAtoms = get(hourlyAtomsAtom);

    const getDayConditionConversionsAware = (
      dayConditionAtom: Atom<DayCondition>
    ) => get(selectConversionsAwareDayConditionAtom(dayConditionAtom));
    const getCurrentConditionConversionsAware = (
      currentConditionAtom: Atom<CurrentCondition>
    ) => get(selectConversionsAwareCurrentConditionAtom(currentConditionAtom));
    const getDaySummaryConditionConversionsAware = (
      daySummaryConditionAtom: Atom<DaySummaryCondition | null>
    ) =>
      get(
        selectConversionsAwareDaySummaryConditionAtom(daySummaryConditionAtom)
      );

    const summaryAtom = selectAtom(forecastAtom, ({ smr }) => ({
      mrng: getDaySummaryConditionConversionsAware(atom(smr.mrng)),
      day: getDaySummaryConditionConversionsAware(atom(smr.day)),
      evng: getDaySummaryConditionConversionsAware(atom(smr.evng)),
      nght: getDaySummaryConditionConversionsAware(atom(smr.nght)),
    }));

    return {
      ...forecast,
      ...getDayConditionConversionsAware(forecastAtom),
      hly: hourlyAtoms.map(getCurrentConditionConversionsAware),
      smr: get(summaryAtom),
    };
  })
);

export default forecastItemsAtom;
