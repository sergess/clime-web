import { atom } from 'jotai';
import take from 'ramda/src/take';
import { i18n } from 'next-i18next';

import { formatUtcString } from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';
import { SUNSET, SUNRISE } from 'client/constants';
import { HourConditionVariant } from 'client/types';
import { hourConditionsFeedAtom } from 'client/state/derivatives';

// [TODO] Check i18n. It seems it's not working here
const getFooter = (
  variant: HourConditionVariant,
  temperature: number | null
) => {
  switch (variant) {
    case SUNSET:
      return i18n?.t('sunset');
    case SUNRISE:
      return i18n?.t('sunrise');
    default:
      return `${temperature}\u00b0`;
  }
};

// [TODO] add <ClientOnlyUnit /> component to render '-' instead of null and render values on client only
export const hourlyForecastCardAtom = atom((get) => {
  const locationData = get(locationDataAtom);
  const hourConditionsFeed = get(hourConditionsFeedAtom);

  return take(5, hourConditionsFeed).map(
    ({ variant, night, temperature, stateId, dateTime }, index: number) => ({
      variant,
      night,
      stateId,
      footer: getFooter(variant, temperature),
      heading:
        index === 0
          ? i18n?.t('Now')
          : formatUtcString(dateTime, 'haaa', locationData?.timeZone),
    })
  );
});

export default hourlyForecastCardAtom;
