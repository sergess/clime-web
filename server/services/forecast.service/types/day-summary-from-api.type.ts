import { DaySummaryConditionFromApi } from './day-summary-condition-from-api.type';

export type DaySummaryFromApi = {
  mrng: DaySummaryConditionFromApi | null;
  day: DaySummaryConditionFromApi | null;
  evng: DaySummaryConditionFromApi | null;
  nght: DaySummaryConditionFromApi | null;
};

export default DaySummaryFromApi;
