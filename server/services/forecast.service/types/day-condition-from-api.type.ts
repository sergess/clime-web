import { ConditionFromApi } from './condition-from-api.type';
import { DaySummaryFromApi } from './day-summary-from-api.type';
import { TideConditionFromApi } from './tide-condition-from-api.type';

export type DayConditionFromApi = {
  dt: string;
  sid: string | null;
  st: string | null;
  stn: string | null;
  tmn: number | null;
  tmx: number | null;
  fl: number | null;
  dp: number | null;
  ws: number | null;
  wd: number | null;
  wg: number | null;
  prc: number | null;
  v: number | null;
  h: number | null;
  p: number | null;
  sr: string | null;
  ss: string | null;
  mr: string | null;
  ms: string | null;
  uv: number | null;
  hly: ConditionFromApi[];
  tds: TideConditionFromApi[];
  smr: DaySummaryFromApi;
};

export default DayConditionFromApi;
