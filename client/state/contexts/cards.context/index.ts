import { createContext } from 'react';

import { CardsContextData } from './types';

export const CardsContext = createContext<CardsContextData>({});

export * from './types';

export default CardsContext;
