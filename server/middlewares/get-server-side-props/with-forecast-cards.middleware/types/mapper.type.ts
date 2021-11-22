import { ForecastCards, LocationData, ValueOf } from 'common/types';

import { ForecastFeed } from 'server/types';

export interface IMapper {
  (
    forecastFeed: ForecastFeed,
    locationData: LocationData | null
  ): ValueOf<ForecastCards>;
}

export default IMapper;
