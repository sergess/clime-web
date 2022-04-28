import React, { FC, ReactElement, useCallback } from 'react';
import { useAtomValue } from 'jotai/utils';
import {
  Flex,
  IconButton,
  Divider,
  ComponentDefaultProps,
} from '@chakra-ui/react';
import Image from 'next/image';

import { mapAtom } from 'client/design-system/organisms/radar.organism/state/atoms';
import { trackEvent } from 'client/services';
import { MAP_ZOOM } from 'client/services/analytics.service/constants';

export const Zoom: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const map = useAtomValue(mapAtom);

  const onZoomIn = useCallback(() => {
    map?.zoomIn();
    trackEvent(MAP_ZOOM);
  }, [map]);
  const onZoomOut = useCallback(() => {
    map?.zoomOut();
    trackEvent(MAP_ZOOM);
  }, [map]);

  return (
    <Flex flexDir="column" bg="white" borderRadius={12} {...componentStyles}>
      <IconButton
        borderBottomStartRadius={0}
        borderBottomEndRadius={0}
        boxShadow="none"
        variant="radar-control"
        aria-label="Zoom in"
        onClick={onZoomIn}
        icon={
          <Image src="/icons/plus.svg" width={24} height={24} alt="Zoom in" />
        }
      />

      <Divider orientation="horizontal" variant="radar-zoom-control" />

      <IconButton
        borderTopStartRadius={0}
        borderTopEndRadius={0}
        variant="radar-control"
        aria-label="Zoom out"
        onClick={onZoomOut}
        icon={
          <Image src="/icons/minus.svg" width={24} height={24} alt="Zoom out" />
        }
      />
    </Flex>
  );
};

export default Zoom;
