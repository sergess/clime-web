import { useContext } from 'react';

import { ForecastCardsContext } from 'client/state/contexts/forecast-cards.context';

import { ForecastCards } from 'common/types';

export const useForecastCards = (): ForecastCards => {
  const forecastCards = useContext(ForecastCardsContext);

  return forecastCards || {};
};

export default useForecastCards;
