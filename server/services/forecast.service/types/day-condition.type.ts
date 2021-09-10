import { CurrentCondition } from './current-condition.type';
import { DaySummary } from './day-summary.type';
import { TideCondition } from './tide-condition.type';

export type DayCondition = {
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
  hly: CurrentCondition[];
  tds: TideCondition[];
  smr: DaySummary;
};

export default DayCondition;
