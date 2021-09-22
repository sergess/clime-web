import { atom } from 'jotai';

import { ForecastFeed } from 'common/types';

export const forecastFeedAtom = atom<ForecastFeed | null>(null);

export default forecastFeedAtom;
