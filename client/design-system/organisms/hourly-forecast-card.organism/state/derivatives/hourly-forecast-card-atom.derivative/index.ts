import { atom } from 'jotai';
import take from 'ramda/src/take';

import { formatUtcString } from 'client/utils';
import { locationDataAtom } from 'client/state/atoms';
import { WEATHER_STATE } from 'client/constants';
import { hourConditionsFeedAtom } from 'client/state/derivatives';

export const hourlyForecastCardAtom = atom((get) => {
  const locationData = get(locationDataAtom);
  const hourConditionsFeed = get(hourConditionsFeedAtom);

  return take(5, hourConditionsFeed).map(
    ({ variant, night, temperature, stateId, dateTime }) => ({
      variant,
      night,
      stateId,
      temperature,
      heading: formatUtcString(
        dateTime,
        variant === WEATHER_STATE ? 'haaa' : 'h:mmaaa',
        locationData?.timeZone
      ),
    })
  );
});

export default hourlyForecastCardAtom;
