import { useContext } from 'react';

import { CardsContext, CardsContextData } from 'client/state/contexts';

export const useCards = (): CardsContextData => {
  const cards = useContext(CardsContext);

  return cards;
};

export default useCards;
