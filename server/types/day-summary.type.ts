import { DaySummaryCondition } from './day-summary-condition.type';

export type DaySummary = {
  morning: DaySummaryCondition | null;
  day: DaySummaryCondition | null;
  evening: DaySummaryCondition | null;
  night: DaySummaryCondition | null;
};

export default DaySummary;
