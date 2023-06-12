import React, { ReactElement, FC, memo } from 'react';
import { Box, ComponentDefaultProps } from '@chakra-ui/react';

import { ForecastCardsProvider } from 'client/state/contexts/forecast-cards.context';
import { Footer, Header, Breadcrumbs } from 'client/design-system/organisms';

export const HomePageLayout: FC = memo(
  ({
    children,
    breadcrumbs,
    forecastCards,
  }: ComponentDefaultProps): ReactElement => (
    <>
      <ForecastCardsProvider value={forecastCards}>
        <Box flex="1 0 auto">
          <Header />
          <Box as="main" w="full" h="100%" bg="white">
            {children}
          </Box>
        </Box>

        <Breadcrumbs items={breadcrumbs} />

        <Footer />
      </ForecastCardsProvider>
    </>
  )
);

HomePageLayout.displayName = 'HomePageLayout';

export default HomePageLayout;
