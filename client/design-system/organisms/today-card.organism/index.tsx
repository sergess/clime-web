import { ReactElement, memo } from 'react';
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

import {
  Card,
  WeatherStateIcon,
  Arrow2Icon,
  InfoPrecipitationIcon,
  InfoUvIcon,
  InfoHumidityIcon,
  InfoPressureIcon,
  InfoBlocksRow,
  ClientOnly,
  InfoChanceIcon,
  InfoVisibilityIcon,
  StateTextRow,
} from 'client/design-system/atoms';
import {
  InfoBlockWithIcon,
  MinMaxTemperatureRow,
  LocationMetaInfoRow,
  WindInfoRow,
} from 'client/design-system/molecules';
import {
  pressureUnitAtom,
  windSpeedUnitAtom,
  precipitationUnitAtom,
  distanceUnitAtom,
} from 'client/state/atoms';
import {
  useScreenWidthSmallerThanMedium,
  useLocationMetaInfo,
} from 'client/hooks';

import { useTodayCardData } from './hooks';

export const TodayCard = memo(
  (props: ComponentDefaultProps): ReactElement | null => {
    const locationMetaInfo = useLocationMetaInfo();

    const pressureUnit = useAtomValue(pressureUnitAtom);
    const windSpeedUnit = useAtomValue(windSpeedUnitAtom);
    const precipitationUnit = useAtomValue(precipitationUnitAtom);
    const distanceUnit = useAtomValue(distanceUnitAtom);

    const { t } = useTranslation('weather-today-page');
    const { isOpen: cardOpened, onToggle: onCardOpenedToggle } =
      useDisclosure();
    const widthSmallerThanMedium = useScreenWidthSmallerThanMedium();
    const todayCardData = useTodayCardData();

    if (!todayCardData) return null;

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
      visibility,
    } = todayCardData;

    return (
      <Card {...props} pt="5">
        <Flex w="full" direction="column" px="4">
          <LocationMetaInfoRow
            exact={locationMetaInfo.exact}
            name={locationMetaInfo.name}
            time={time}
            componentStyles={{
              mb: 5,
            }}
          />

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

          <StateTextRow mt={1}>{stateText}</StateTextRow>

          <WindInfoRow
            directionAngle={windDirectionAngle}
            componentStyles={{
              my: '1.125em',
            }}
          >
            <ClientOnly>
              {t('{{windAzimuth}} wind at {{windSpeed}}{{windSpeedUnit}}', {
                windAzimuth: windAzimuth.toUpperCase(),
                windSpeed,
                windSpeedUnit,
              })}
            </ClientOnly>
          </WindInfoRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <InfoBlocksRow my={3}>
            <InfoBlockWithIcon
              icon={<InfoChanceIcon w={8} h={8} />}
              label={t('Chance')}
              text={`${precipitationChance}%`}
              flex={1}
            />

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
          </InfoBlocksRow>

          <Divider orientation="horizontal" variant="card-divider" />

          <Collapse in={cardOpened || !widthSmallerThanMedium} animateOpacity>
            <InfoBlocksRow my={3}>
              <InfoBlockWithIcon
                icon={<InfoUvIcon w={8} h={8} />}
                label={t('UV Index')}
                text={uvIndex}
                flex={1}
              />

              <InfoBlockWithIcon
                icon={<InfoHumidityIcon w={8} h={8} />}
                label={t('Humidity')}
                text={`${humidity}%`}
                flex={1}
              />
            </InfoBlocksRow>

            <Divider orientation="horizontal" variant="card-divider" />

            <InfoBlocksRow mt={3} mb={widthSmallerThanMedium ? 3 : '1.125em'}>
              <InfoBlockWithIcon
                icon={<InfoPressureIcon w={8} h={8} />}
                label={t('Pressure')}
                text={<ClientOnly>{`${pressure} ${pressureUnit}`}</ClientOnly>}
                flex={1}
              />

              <InfoBlockWithIcon
                icon={<InfoVisibilityIcon w={8} h={8} />}
                label={t('Visibility')}
                text={
                  <ClientOnly>{`${visibility} ${distanceUnit}`}</ClientOnly>
                }
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
