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
  InfoDewPointIcon,
} from 'client/design-system/atoms';
import { precipitationUnitAtom, pressureUnitAtom } from 'client/state/atoms';
import { InfoBlockWithIcon } from 'client/design-system/molecules';

import { SelectedDayInfoProps } from './types';

export const SelectedDayInfo = memo(
  ({
    precipitationChance,
    uvIndex,
    pressure,
    humidity,
    dewPoint,
    precipitationLevel,
  }: SelectedDayInfoProps): ReactElement | null => {
    const { t } = useTranslation('daily-detailed-forecast-card');

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
            icon={<InfoDewPointIcon w={8} h={8} />}
            label={t('Dew point')}
            text={<ClientOnly>{dewPoint}&#176;</ClientOnly>}
            flex={1}
          />
        </InfoBlocksRow>
      </>
    );
  }
);

SelectedDayInfo.displayName = 'SelectedDayInfo';

export default SelectedDayInfo;
