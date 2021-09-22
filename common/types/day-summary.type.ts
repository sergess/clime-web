import { DaySummaryCondition } from './day-summary-condition.type';

export type DaySummary = {
  mrng: DaySummaryCondition | null;
  day: DaySummaryCondition | null;
  evng: DaySummaryCondition | null;
  nght: DaySummaryCondition | null;
};

export default DaySummary;
