import isNil from 'ramda/src/isNil';
import complement from 'ramda/src/complement';

import { DayCondition, DaySummaryCondition } from 'server/types';

const isNotNil = complement(isNil);

export const buildDaySummaryConditionsFeed = (
  dayConditions: DayCondition[]
): DaySummaryCondition[] =>
  dayConditions.reduce(
    (
      daySummaryConditions: DaySummaryCondition[],
      { summary }: DayCondition
    ) => {
      const { morning, day, evening, night } = summary;
      const nextDaySummaryConditions: DaySummaryCondition[] = [];

      if (isNotNil(morning)) {
        nextDaySummaryConditions.push(morning as DaySummaryCondition);
      }

      if (isNotNil(day)) {
        nextDaySummaryConditions.push(day as DaySummaryCondition);
      }

      if (isNotNil(evening)) {
        nextDaySummaryConditions.push(evening as DaySummaryCondition);
      }

      if (isNotNil(night)) {
        nextDaySummaryConditions.push(night as DaySummaryCondition);
      }

      return [...daySummaryConditions, ...nextDaySummaryConditions];
    },
    []
  );

export default buildDaySummaryConditionsFeed;
