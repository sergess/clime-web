import take from 'ramda/src/take';

import { Summary } from 'common/types';

import {
  convertWindDegreeToAzimuth,
  calculateOppositeAngle,
} from 'server/utils';
import { ForecastFeed } from 'server/types';

export const mapSummaryCard = (forecastFeed: ForecastFeed): Summary =>
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

export default mapSummaryCard;
