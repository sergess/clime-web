import { atom, Atom } from 'jotai';
import { splitAtom, selectAtom } from 'jotai/utils';
import { isWithinInterval } from 'date-fns';
import { addDays } from 'date-fns/fp';
import findIndex from 'ramda/src/findIndex';
import propSatisfies from 'ramda/src/propSatisfies';

import { forecastFeedAtom } from 'client/state/atoms';
import { convertUtcStringToLocalDate } from 'client/utils';
import {
  selectConversionsAwareConditionAtom,
  selectConversionsAwareDayConditionAtom,
  selectConversionsAwareDaySummaryConditionAtom,
} from 'client/state/selectors';

import { Condition, DayCondition, DaySummaryCondition } from 'common/types';

const addOneDay = addDays(1);

const forecastFromTodayAtom = atom<DayCondition[]>((get) => {
  const forecastItems = get(forecastFeedAtom)?.frst ?? [];
  const today = new Date();

  const forecastForTodayIndex = findIndex(
    propSatisfies((dt: string) => {
      const date = convertUtcStringToLocalDate(dt);

      return isWithinInterval(today, { start: date, end: addOneDay(date) });
    }, 'dt'),
    forecastItems
  );

  return forecastItems.slice(forecastForTodayIndex);
});

const forecastAtomsAtom = splitAtom(forecastFromTodayAtom);

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
      currentConditionAtom: Atom<Condition>
    ) => get(selectConversionsAwareConditionAtom(currentConditionAtom));
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
