import { ReactElement, useState, useEffect } from 'react';
import {
  Button,
  Divider,
  Text,
  Flex,
  Collapse,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import climeTheme from 'src/theme';
import { convertWindDegreeToAzimuth, calculateOppositeAngle } from 'src/utils';
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
 InfoBlocksRow } from 'src/ui/atoms';

import { InfoBlockWithIcon, MinMaxTemperature } from 'src/ui/molecules';

import { TodayCardProps } from './types';

export const TodayCard = ({
  locationExact,
  location,
  time,
  weatherStateId,
  currentTemperature,
  feelsLikeTemperature,
  minTemperature,
  maxTemperature,
  stateText,
  windDegree,
  windSpeed,
  windSpeedUnit,
  precipitationChance,
  precipitation,
  precipitationUnit,
  uvIndex,
  humidity,
  pressure,
  pressureUnit,
}: TodayCardProps): ReactElement => {
  const { t } = useTranslation('today-card');
  const { isOpen: cardOpened, onToggle: onCardOpenedToggle } = useDisclosure();
  const [widthSmallerThanMedium, setWidthSmallerThanMedium] = useState(true);
  const [widthLargerThanMedium] = useMediaQuery(
    `(min-width: ${climeTheme.breakpoints.md})`
  );

  useEffect(() => {
    setWidthSmallerThanMedium(!widthLargerThanMedium);
  }, [widthLargerThanMedium]);

  return (
    <Card m={5} pt="5" pb={{ md: 2 }} w={{ md: 340 }}>
      <Flex w="full" direction="column" px="4">
        <Flex w="full" justify="space-between" mb={5}>
          <Flex>
            {locationExact && <PinCardIcon me={2.5} />}

            <Text color="blue.800" textStyle="16-semi-bold" noOfLines={2}>
              {location}
            </Text>
          </Flex>

          <Flex>
            <Text color="gray.500" textStyle="16-medium">
              {time}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" align="center" justify="center" mb={5}>
          <Flex me={4}>
            <WeatherStateIcon stateId={weatherStateId} boxSize="100" />
          </Flex>

          <Flex direction="column">
            <Flex direction="row">
              <Text color="blue.800" textStyle="80-main-temperature">
                {currentTemperature !== null ? currentTemperature : '-'}
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
                  {t('Feels like {{feelsLikeTemperature}}°', {
                    feelsLikeTemperature:
                      feelsLikeTemperature !== null
                        ? feelsLikeTemperature
                        : '-',
                  })}
                </Text>
              </Flex>
            </Flex>

            <MinMaxTemperature min={minTemperature} max={maxTemperature} />
          </Flex>
        </Flex>

        <Flex mt={1} justify="center">
          <Text color="blue.800" textStyle="16-weather-detail" align="center">
            {!stateText && precipitationChance === null && '-'}

            {(stateText || precipitationChance !== null) &&
              `${stateText ? `${stateText}.` : ''} ${
                precipitationChance
                  ? t('Precipitation chance {{precipitationChance}}%', {
                      precipitationChance,
                    })
                  : ''
              }`}
          </Text>
        </Flex>

        <Flex my={4} justify="center">
          <WindDirectionIcon
            fill="gray.600"
            me={2}
            transform={`rotate(${calculateOppositeAngle(windDegree)}deg)`}
          />

          <Text color="gray.600" textStyle="16-medium">
            {t('{{azimuth}} wind at {{windSpeed}} {{windSpeedUnit}}', {
              azimuth:
                windDegree !== null
                  ? convertWindDegreeToAzimuth(windDegree)
                  : '-',
              windSpeed,
              windSpeedUnit,
            })}
          </Text>
        </Flex>

        <Divider orientation="horizontal" variant="card-divider" />

        <InfoBlocksRow>
          <InfoBlockWithIcon
            icon={<InfoPrecipitationIcon w={8} h={8} />}
            label={t('Precipitation')}
            text={`${precipitation} ${precipitationUnit}`}
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
              text={`${pressure} ${pressureUnit}`}
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
};

export default TodayCard;
