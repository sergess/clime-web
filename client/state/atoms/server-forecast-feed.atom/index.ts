import { atom } from 'jotai';

import { ForecastFeed } from 'common/types';

export const serverForecastFeedAtom = atom<ForecastFeed | null>(null);

export default serverForecastFeedAtom;
