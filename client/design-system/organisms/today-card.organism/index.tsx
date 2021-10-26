import { ReactElement, memo, useState, useEffect } from 'react';
import {
  Button,
  Divider,
  Text,
  Flex,
  Collapse,
  useDisclosure,
  ComponentDefaultProps,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';
import { useRouter } from 'next/router';
import toUpper from 'ramda/src/toUpper';

import {
  Card,
  WeatherStateIcon,
  PinCardIcon,
  Arrow2Icon,
  WindDirectionIcon,
  InfoPrecipitationIcon,
  InfoUvIcon,
  InfoHumidityIcon,
  InfoPressureIcon,
  InfoBlocksRow,
  ClientOnly,
} from 'client/design-system/atoms';
import {
  InfoBlockWithIcon,
  MinMaxTemperatureRow,
} from 'client/design-system/molecules';
import {
  pressureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
} from 'client/state/atoms';
import { useScreenWidthSmallerThanMedium, useLocationData } from 'client/hooks';
import {
  isLocationTheSameAsLocationFromBrowser,
  getExtendedLocationName,
  getLocationName,
  capitalize,
} from 'client/utils';

import { useTodayCardDataAtomValue } from './hooks';
import { TodayCardProps } from './types';

export const TodayCard = memo(
  ({
    data,
    ...componentProps
  }: TodayCardProps & ComponentDefaultProps): ReactElement => {
    const { query } = useRouter();
    const todayCardData = useTodayCardDataAtomValue(data);
    const {
      time,
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
    } = todayCardData;

    const [locationExact, setLocationExact] = useState(false);
    const [locationName, setLocationName] = useState('');

    const locationData = useLocationData();

    useEffect(() => {
      const locationTheSameAsLocationFromBrowser =
        !!locationData &&
        isLocationTheSameAsLocationFromBrowser({
          longitude: locationData.longitude,
          latitude: locationData.latitude,
        });

      setLocationExact(locationTheSameAsLocationFromBrowser);

      const nextLocationName = locationTheSameAsLocationFromBrowser
        ? getExtendedLocationName(locationData)
        : getLocationName(locationData);

      setLocationName(
        nextLocationName ||
          `${capitalize((query?.city as string) ?? '')}, ${toUpper(
            (query?.countryCode as string) ?? ''
          )}`
      );
    }, [locationData, query]);

    const pressureUnit = useAtomValue(pressureUnitAtom);
    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
    const precipitationUnit = useAtomValue(precipitationUnitAtom);

    const { t } = useTranslation('weather-today-page');
    const { isOpen: cardOpened, onToggle: onCardOpenedToggle } =
      useDisclosure();
    const widthSmallerThanMedium = useScreenWidthSmallerThanMedium();

    return (
      <Card {...componentProps}>
        <Flex w="full" direction="column" px="4">
          <Flex w="full" justify="space-between" mb={5}>
            <Flex>
              {locationExact && <PinCardIcon me={2.5} />}

              <Text color="blue.800" textStyle="16-semi-bold" noOfLines={2}>
                {locationName}
              </Text>
            </Flex>

            <Flex>
              <Text color="gray.500" textStyle="16-medium">
                <ClientOnly>{time}</ClientOnly>
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" align="center" justify="center" mb={5}>
            <Flex me={4}>
              <WeatherStateIcon stateId={stateId} night={night} boxSize="100" />
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

          <Flex mt={1} justify="center">
            <Text color="blue.800" textStyle="16-weather-detail" align="center">
              {`${stateText ? `${stateText}.` : ''} ${t(
                'Precipitation chance {{precipitationChance}}%',
                {
                  precipitationChance,
                }
              )}`}
            </Text>
          </Flex>

          <Flex my={4} justify="center">
            <WindDirectionIcon
              fill="gray.600"
              me={2}
              transform={`rotate(${windDirectionAngle}deg)`}
            />

            <Text color="gray.600" textStyle="16-medium">
              <ClientOnly>
                {t('{{windAzimuth}} wind at {{windSpeed}}{{windSpeedUnit}}', {
                  windAzimuth: windAzimuth.toUpperCase(),
                  windSpeed,
                  windSpeedUnit,
                })}
              </ClientOnly>
            </Text>
          </Flex>

          <Divider orientation="horizontal" variant="card-divider" />

          <InfoBlocksRow>
            <InfoBlockWithIcon
              icon={<InfoPrecipitationIcon w={8} h={8} />}
              label={t('Precipitation')}
              text={
                <ClientOnly>
                  {`${precipitationLevel} ${precipitationUnit}`}
                </ClientOnly>
              }
              flex={1}
            />

            <InfoBlockWithIcon
              icon={<InfoUvIcon w={8} h={8} />}
              label={t('UV Index')}
              text={uvIndex}
              flex={1}
            />
          </InfoBlocksRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <Collapse in={cardOpened || !widthSmallerThanMedium} animateOpacity>
            <InfoBlocksRow>
              <InfoBlockWithIcon
                icon={<InfoHumidityIcon w={8} h={8} />}
                label={t('Humidity')}
                text={`${humidity}%`}
                flex={1}
              />

              <InfoBlockWithIcon
                icon={<InfoPressureIcon w={8} h={8} />}
                label={t('Pressure')}
                text={<ClientOnly>{`${pressure} ${pressureUnit}`}</ClientOnly>}
                flex={1}
              />
            </InfoBlocksRow>

            {widthSmallerThanMedium && (
              <Divider orientation="horizontal" variant="card-divider" />
            )}
          </Collapse>
        </Flex>

        {widthSmallerThanMedium && (
          <Button variant="expand-card" onClick={onCardOpenedToggle}>
            <Text color="blue.500" textStyle="14-semi-bold" me={1}>
              {cardOpened ? t('Hide') : t('Show more')}
            </Text>
            <Arrow2Icon
              transform={cardOpened ? 'rotate(270deg)' : 'rotate(90deg)'}
              w={5}
              h={5}
            />
          </Button>
        )}
      </Card>
    );
  }
);

TodayCard.displayName = 'TodayCard';

export default TodayCard;
