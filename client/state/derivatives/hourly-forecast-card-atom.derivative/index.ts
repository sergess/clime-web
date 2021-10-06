import { atom } from 'jotai';
import take from 'ramda/src/take';
import { i18n } from 'next-i18next';

import {
  formatUtcString,
  generateHourlyCondition,
  isUtcStringNight,
} from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';
import { SUNSET, SUNRISE, WEATHER_STATE } from 'client/constants';
import { HourlyCondition } from 'client/types';

import { currentConditionAtom } from '../current-condition-atom.derivative';
import { forecastAtomFamily } from '../forecast-atom-family.derivative';
import { hourlyFeedAtom } from '../hourly-feed.derivative';

// [TODO] Check i18n. It seems it's not working here
const getFooter = ({ variant, t }: HourlyCondition) => {
  switch (variant) {
    case SUNSET:
      return i18n?.t('sunset');
    case SUNRISE:
      return i18n?.t('sunrise');
    default:
      return `${t}\u00b0`;
  }
};

// [TODO] add <ClientOnlyUnit /> component to render '-' instead of null and render values on client only
export const hourlyForecastCardAtom = atom((get) => {
  const locationData = get(locationDataAtom);
  const hourlyFeed = get(hourlyFeedAtom);
  const currentCondition = get(currentConditionAtom);
  const forecastForToday = get(forecastAtomFamily(0));

  const { sr, ss } = forecastForToday;
  const nextFourHours = take(4, hourlyFeed);
  // [TODO] Cast current condition to hourly condition type and remove it from here
  const currentHourlyCondition = generateHourlyCondition(
    WEATHER_STATE,
    currentCondition,
    isUtcStringNight(currentCondition.dt, sr, ss)
  );

  return [currentHourlyCondition, ...nextFourHours].map(
    (hourlyCondition, index: number) => ({
      variant: hourlyCondition.variant,
      night: hourlyCondition.night,
      footer: getFooter(hourlyCondition),
      weatherStateId: hourlyCondition.sid,
      heading:
        index === 0
          ? i18n?.t('Now')
          : formatUtcString(hourlyCondition.dt, 'haaa', locationData?.timeZone),
    })
  );
});

export default hourlyForecastCardAtom;
