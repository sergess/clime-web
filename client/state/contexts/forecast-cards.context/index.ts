import { createContext } from 'react';

import { ForecastCards } from 'common/types';

export const ForecastCardsContext = createContext<ForecastCards>({});

export const ForecastCardsProvider = ForecastCardsContext.Provider;

export default ForecastCardsContext;
