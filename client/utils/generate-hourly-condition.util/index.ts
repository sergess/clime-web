import { HourlyConditionVariant, HourlyCondition } from 'client/types';

export const generateHourlyCondition = (
  variant: HourlyConditionVariant,
  condition: { [key: string]: number | string | null },
  night = false
): HourlyCondition =>
  ({
    sid: null,
    st: null,
    stn: null,
    t: null,
    fl: null,
    dp: null,
    ws: null,
    wd: null,
    wg: null,
    pr: null,
    prc: null,
    v: null,
    h: null,
    p: null,
    swh: null,
    tw: null,
    night,
    variant,
    ...condition,
  } as HourlyCondition);

export default generateHourlyCondition;
