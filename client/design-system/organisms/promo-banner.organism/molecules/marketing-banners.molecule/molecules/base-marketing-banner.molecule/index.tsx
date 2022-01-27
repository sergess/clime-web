import React, { FC, ReactElement } from 'react';
import { ComponentDefaultProps, Flex, LinkBox } from '@chakra-ui/react';

import { BackgroundImage } from 'client/design-system/atoms';
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
  <LinkBox
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
  </LinkBox>
);

export default BaseMarketingBanner;
