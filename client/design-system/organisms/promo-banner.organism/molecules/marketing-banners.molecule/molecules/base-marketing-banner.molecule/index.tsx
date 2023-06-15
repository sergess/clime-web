import React, { FC, ReactElement } from 'react';
import { ComponentDefaultProps, Flex } from '@chakra-ui/react';

import {
  BackgroundImage,
  GetClimeAppOverlay,
} from 'client/design-system/atoms';
import {
  DEFAULT_BANNER_HEIGHT,
  DEFAULT_BANNER_BORDER_RADIUS,
} from 'client/design-system/organisms/promo-banner.organism/constants';

export const BaseMarketingBanner: FC<
  {
    backgroundSrc: string;
    backgroundPriority: boolean;
    containerStyles?: ComponentDefaultProps;
  } & ComponentDefaultProps
> = ({
  backgroundSrc,
  backgroundPriority,
  containerStyles,
  children,
  ...bannerDefaultProps
}): ReactElement => (
  <GetClimeAppOverlay
    {...bannerDefaultProps}
    borderRadius={DEFAULT_BANNER_BORDER_RADIUS}
    h={DEFAULT_BANNER_HEIGHT}
    overflow="hidden"
    position="relative"
  >
    <BackgroundImage src={backgroundSrc} priority={backgroundPriority} />

    <Flex
      position="relative"
      h="full"
      alignItems="flex-start"
      flexDirection="column"
      justifyContent="space-between"
      {...containerStyles}
    >
      {children}
    </Flex>
  </GetClimeAppOverlay>
);

export default BaseMarketingBanner;
