import { ForecastCard } from 'common/types';

import { IMapper } from './mapper.type';

export type ForecastCardsSpec = {
  [K in ForecastCard]?: IMapper;
};

export default ForecastCardsSpec;
