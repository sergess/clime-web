import React, { ReactElement, memo, useEffect } from 'react';
import {
  Button,
  Divider,
  Text,
  Flex,
  Collapse,
  useDisclosure,
  ComponentDefaultProps,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';

import climeTheme from 'client/theme';
import { MEASUREMENT_UNIT_LABELS } from 'client/constants/measurement-units/labels.constant';
import {
  Card,
  WeatherStateIcon,
  Arrow2Icon,
  InfoBlocksRow,
  ClientOnly,
  StateTextRow,
} from 'client/design-system/atoms';
import {
  InfoBlockWithIcon,
  MinMaxTemperatureRow,
  LocationInfoRow,
  WindInfoRow,
} from 'client/design-system/molecules';
import {
  pressureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import { trackEvent } from 'client/services';
import { useScreenWidthSmallerThan } from 'client/hooks';
import {
  CURRENT_DETAILS_COMPACT_SHOWN,
  CURRENT_DETAILS_FULL_SHOWN,
} from 'client/services/analytics.service/constants';
import { useTodayCardData } from './hooks';

import { TodayCardProps } from './types';

export const TodayCard = memo(
  ({
    heading = null,
    ...componentStyles
  }: TodayCardProps & ComponentDefaultProps): ReactElement | null => {
    const pressureUnit = useAtomValue(pressureUnitAtom);
    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
    const precipitationUnit = useAtomValue(precipitationUnitAtom);
    const distanceUnit = useAtomValue(distanceUnitAtom);

    const { t } = useTranslation('today-card');
    const { isOpen: cardOpened, onToggle: onCardOpenedToggle } =
      useDisclosure();
    const widthSmallerThanMedium = useScreenWidthSmallerThan(
      climeTheme.breakpoints.md
    );
    const todayCardData = useTodayCardData();

    // [TODO] Find better way how we can handle 'collapsed' state.
    // 'useScreenWidthSmallerThan' returns 'true' during SSR and sets correct value after rehydration.
    // Probably we need to use media-queries here.
    const [widthLargerThanMedium] = useMediaQuery(
      `(min-width: ${climeTheme.breakpoints.md})`
    );

    useEffect(() => {
      if (cardOpened || widthLargerThanMedium) {
        trackEvent(CURRENT_DETAILS_FULL_SHOWN);
      } else {
        trackEvent(CURRENT_DETAILS_COMPACT_SHOWN);
      }
    }, [cardOpened, widthLargerThanMedium]);

    if (!todayCardData) return null;

    const {
      date,
      night,
      stateId,
      temperature,
      feelsLikeTemperature,
      minTemperature,
      maxTemperature,
      stateText,
      windDirectionAngle,
      windAzimuth,
      windSpeed,
      precipitationChance,
      precipitationLevel,
      uvIndex,
      humidity,
      pressure,
      visibility,
    } = todayCardData;

    return (
      <Card {...componentStyles} pt="5">
        <Flex w="full" direction="column" px="4">
          <LocationInfoRow
            date={date}
            heading={heading}
            componentStyles={{
              mb: 5,
            }}
          />

          <Flex direction="row" align="center" justify="center" mb={5}>
            <Flex me={4}>
              <WeatherStateIcon
                stateId={stateId}
                night={night}
                width={100}
                height={100}
                priority
              />
            </Flex>

            <Flex direction="column">
              <Flex direction="row">
                <Text color="blue.800" textStyle="80-main-temperature">
                  <ClientOnly>{temperature}</ClientOnly>
                </Text>
                <Text color="blue.800" textStyle="42-main-degree">
                  &#176;
                </Text>

                <Flex direction="column" mt="auto" mb={2} ms="-0.6rem">
                  <Text
                    color="gray.500"
                    textStyle="14-feel-like"
                    whiteSpace="pre-line"
                  >
                    <ClientOnly>
                      {t('Feels like {{feelsLikeTemperature}}', {
                        feelsLikeTemperature,
                      })}
                    </ClientOnly>
                  </Text>
                </Flex>
              </Flex>

              <MinMaxTemperatureRow min={minTemperature} max={maxTemperature} />
            </Flex>
          </Flex>

          <StateTextRow mt={1}>{stateText}</StateTextRow>

          <WindInfoRow
            directionAngle={windDirectionAngle}
            componentStyles={{
              my: '1.125em',
            }}
          >
            <ClientOnly>
              {t('{{windAzimuth}} wind at {{windSpeed}} {{windSpeedUnit}}', {
                windAzimuth: windAzimuth.toUpperCase(),
                windSpeed,
                windSpeedUnit: MEASUREMENT_UNIT_LABELS[windSpeedUnit],
              })}
            </ClientOnly>
          </WindInfoRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <InfoBlocksRow my={3}>
            <InfoBlockWithIcon
              iconSrc="/icons/info-chance.svg"
              iconAlt={t('Chance')}
              label={t('Chance')}
              text={`${precipitationChance}%`}
              flex={1}
            />

            <InfoBlockWithIcon
              iconSrc="/icons/info-precipitation.svg"
              iconAlt={t('Precipitation')}
              label={t('Precipitation')}
              text={
                <ClientOnly>
                  {`${precipitationLevel} ${MEASUREMENT_UNIT_LABELS[precipitationUnit]}`}
                </ClientOnly>
              }
              flex={1}
            />
          </InfoBlocksRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <Collapse in={cardOpened || !widthSmallerThanMedium} animateOpacity>
            <InfoBlocksRow my={3}>
              <InfoBlockWithIcon
                iconSrc="/icons/info-uv.svg"
                iconAlt={t('UV Index')}
                label={t('UV Index')}
                text={t('{{uvIndex}} of 11', { uvIndex })}
                flex={1}
              />

              <InfoBlockWithIcon
                iconSrc="/icons/info-humidity.svg"
                iconAlt={t('Humidity')}
                label={t('Humidity')}
                text={`${humidity}%`}
                flex={1}
              />
            </InfoBlocksRow>

            <Divider orientation="horizontal" variant="card-divider" />

            <InfoBlocksRow
              mt={3}
              mb="1.125em"
              sx={{
                [`@media not screen and (min-width: ${climeTheme.breakpoints.md})`]:
                  { mb: 3 },
              }}
            >
              <InfoBlockWithIcon
                iconSrc="/icons/info-pressure.svg"
                iconAlt={t('Pressure')}
                label={t('Pressure')}
                text={
                  <ClientOnly>{`${pressure} ${MEASUREMENT_UNIT_LABELS[pressureUnit]}`}</ClientOnly>
                }
                flex={1}
              />

              <InfoBlockWithIcon
                iconSrc="/icons/info-visibility.svg"
                iconAlt={t('Visibility')}
                label={t('Visibility')}
                text={
                  <ClientOnly>{`${visibility} ${MEASUREMENT_UNIT_LABELS[distanceUnit]}`}</ClientOnly>
                }
                flex={1}
              />
            </InfoBlocksRow>

            <Divider
              sx={{
                [`@media screen and (min-width: ${climeTheme.breakpoints.md})`]:
                  { display: 'none' },
              }}
              orientation="horizontal"
              variant="card-divider"
            />
          </Collapse>
        </Flex>

        <Button
          sx={{
            [`@media screen and (min-width: ${climeTheme.breakpoints.md})`]: {
              display: 'none',
            },
          }}
          variant="expand-card"
          onClick={onCardOpenedToggle}
        >
          <Text color="blue.500" textStyle="14-semi-bold" me={1}>
            {cardOpened ? t('Hide details') : t('Show more details')}
          </Text>
          <Arrow2Icon
            transform={cardOpened ? 'rotate(270deg)' : 'rotate(90deg)'}
            w={5}
            h={5}
          />
        </Button>
      </Card>
    );
  }
);

TodayCard.displayName = 'TodayCard';

export default TodayCard;
