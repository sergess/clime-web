import take from 'ramda/src/take';

import { SummaryCardData } from 'common/types';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

export const withSummaryCard = (forecastFeed: ForecastFeed): SummaryCardData =>
  take(4, forecastFeed.daySummaryConditions).map(
    ({ windDirection, ...rest }) => {
      const safeWindDirection = windDirection || 0;

      return {
        ...rest,
        windAzimuth: convertWindDegreeToAzimuth(safeWindDirection),
        windDirectionAngle: calculateOppositeAngle(safeWindDirection),
      };
    }
  );

export default withSummaryCard;
