import React, { ReactElement, FC } from 'react';
import Image from 'next/image';
import {
  Text,
  Box,
  Flex,
  ComponentDefaultProps,
  useDisclosure,
  Collapse,
  IconButton,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useLocationData } from 'client/hooks';
import { getLocationName } from 'client/utils';

export const InfoCard: FC<ComponentDefaultProps> = (
  componentStyles
): ReactElement => {
  const { t } = useTranslation('card-info');

  const locationData = useLocationData();
  const locationName = getLocationName(locationData);

  const { isOpen: infoOpened, onToggle: onInfoOpenedToggle } = useDisclosure();

  return (
    <Box {...componentStyles} pos="relative">
      <Flex
        px={4}
        pt={5}
        pb={4}
        bg="white"
        w="full"
        align="center"
        justify="space-between"
      >
        <Text as="h1" color="blue.800" textStyle="16-semi-bold">
          {t('{{locationName}} Weather Radar', { locationName })}
        </Text>
        <IconButton
          aria-label="More"
          variant="card-info"
          onClick={onInfoOpenedToggle}
          icon={
            <Box letterSpacing={0} wordSpacing={0} fontSize={0}>
              <Image
                src="/icons/radar-info.svg"
                width={24}
                height={24}
                alt="More"
              />
            </Box>
          }
        />
      </Flex>
      <Collapse in={infoOpened}>
        <Box
          pos="absolute"
          px={4}
          top={0}
          right={0}
          w={{ base: 'full', sm: '340px' }}
          bg="white"
          zIndex="popover"
          boxShadow="card-info"
          borderRadius="2xl"
        >
          <Flex
            pt={5}
            pb={4}
            bg="white"
            w="full"
            align="center"
            justify="space-between"
          >
            <Text as="h1" color="blue.500" textStyle="16-semi-bold">
              {t('{{locationName}} Weather Radar', { locationName })}
            </Text>
            <IconButton
              aria-label="Hide"
              variant="card-info"
              onClick={onInfoOpenedToggle}
              icon={
                <Box letterSpacing={0} wordSpacing={0} fontSize={0}>
                  <Image
                    src="/icons/close.svg"
                    width={24}
                    height={24}
                    alt="Hide"
                  />
                </Box>
              }
            />
          </Flex>
          <Box pb={4} color="blue.800" textStyle="14-medium-card">
            {t(
              'The weather radar map shows the precipitation at your location in the past hour. You can also view the type of precipitation (rain, snow, or mixed precipitation) and its movement via colored layers on the map. Clime uses this data to create weather forecasts and alerts that help you plan your daily activities and prepare for severe weather events. For a 24-hour advanced precipitation forecast, download the Clime app.'
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default InfoCard;
