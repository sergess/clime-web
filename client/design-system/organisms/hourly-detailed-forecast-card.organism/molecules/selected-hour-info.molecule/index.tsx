import { ReactElement, memo } from 'react';
import { Divider } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';

import {
  ClientOnly,
  InfoBlocksRow,
  InfoPrecipitationIcon,
  InfoUvIcon,
  InfoHumidityIcon,
  InfoPressureIcon,
  InfoChanceIcon,
  InfoFeelsIcon,
} from 'client/design-system/atoms';
import { precipitationUnitAtom, pressureUnitAtom } from 'client/state/atoms';
import { InfoBlockWithIcon } from 'client/design-system/molecules';

import { SelectedHourInfoProps } from './types';

export const SelectedHourInfo = memo(
  ({
    precipitationChance,
    uvIndex,
    pressure,
    humidity,
    feelsLikeTemperature,
    precipitationLevel,
  }: SelectedHourInfoProps): ReactElement | null => {
    const { t } = useTranslation('ten-day-weather-page');

    const precipitationUnit = useAtomValue(precipitationUnitAtom);
    const pressureUnit = useAtomValue(pressureUnitAtom);

    return (
      <>
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

        <InfoBlocksRow mt={3} mb="1.125em">
          <InfoBlockWithIcon
            icon={<InfoPressureIcon w={8} h={8} />}
            label={t('Pressure')}
            text={<ClientOnly>{`${pressure} ${pressureUnit}`}</ClientOnly>}
            flex={1}
          />

          <InfoBlockWithIcon
            icon={<InfoFeelsIcon w={8} h={8} />}
            label={t('Feels like')}
            text={<ClientOnly>{feelsLikeTemperature}&#176;</ClientOnly>}
            flex={1}
          />
        </InfoBlocksRow>
      </>
    );
  }
);

SelectedHourInfo.displayName = 'SelectedHourInfo';

export default SelectedHourInfo;
