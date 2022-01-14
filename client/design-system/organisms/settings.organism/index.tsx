import React, { ReactElement, useCallback, useRef, useMemo } from 'react';
import {
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import Image from 'next/image';

import { HeaderPopoverOverlay } from 'client/design-system/atoms';
import { settingsAtom } from 'client/state/derivatives';
import {
  DistanceUnitValues,
  PrecipitationUnitValues,
  PressureUnitValues,
  TemperatureUnitValues,
  SpeedUnitValues,
  Settings as SettingsType,
} from 'client/types';
import { useScreenWidthSmallerThanMedium } from 'client/hooks';

import climeTheme from 'client/theme';

import { ValueOf } from 'common/types';

import { SettingsCardSwitcherRow } from './molecules';
import { SettingsTogglerProps } from './types';

export const Settings = ({
  opened,
  onOpen,
  onClose,
}: SettingsTogglerProps): ReactElement => {
  const { t } = useTranslation('common');
  const settingsCardRef = useRef<HTMLDivElement>(null);

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  const [settings, setSettings] = useAtom(settingsAtom);

  const getSwitcherOptions = useCallback(
    (unitValues: string[]) =>
      unitValues.map((value) => ({
        value,
        label: t(value),
      })),
    []
  );

  const temperatureUnitOptions = useMemo(
    () => getSwitcherOptions(TemperatureUnitValues),
    []
  );
  const windSpeedUnitOptions = useMemo(
    () => getSwitcherOptions(SpeedUnitValues),
    []
  );
  const precipitationUnitOptions = useMemo(
    () => getSwitcherOptions(PrecipitationUnitValues),
    []
  );
  const pressureUnitOptions = useMemo(
    () => getSwitcherOptions(PressureUnitValues),
    []
  );
  const distanceUnitOptions = useMemo(
    () => getSwitcherOptions(DistanceUnitValues),
    []
  );

  const onSettingsChange = useCallback(
    (unit: keyof SettingsType) => (value: ValueOf<SettingsType>) => {
      setSettings({ [unit]: value });
    },
    []
  );

  return (
    <Popover
      isOpen={opened}
      placement="bottom-end"
      gutter={screenWidthSmallerThanMedium ? 26 : 36}
      variant="card"
    >
      <PopoverTrigger>
        <Flex
          align="center"
          justify="space-between"
          cursor="pointer"
          ms={[4, 4, 5]}
          h={{ md: '36px' }}
          w={{ md: '80px' }}
          flex="none"
          bg={{ md: 'gray.50' }}
          borderRadius="2xl"
          ps={{ md: '3.5' }}
          pe={{ md: '1.5' }}
          onClick={opened ? onClose : onOpen}
        >
          <Text
            sx={{
              [`@media screen and (max-width: ${climeTheme.breakpoints.md})`]: {
                display: 'none',
              },
            }}
            textStyle="16-medium"
          >
            {t(settings.temperature)}
          </Text>

          <Image
            src={opened ? '/icons/close.svg' : '/icons/settings.svg'}
            width={24}
            height={24}
            alt=""
          />
        </Flex>
      </PopoverTrigger>

      <Portal>
        {opened && <HeaderPopoverOverlay onClick={onClose} />}

        <PopoverContent w={{ base: 'full', md: '380px' }}>
          <Flex ref={settingsCardRef} direction="column" w="100%" pt={1} px={4}>
            <SettingsCardSwitcherRow
              first
              title="Temperature:"
              options={temperatureUnitOptions}
              value={settings.temperature}
              onValueChange={onSettingsChange('temperature')}
            />
            <SettingsCardSwitcherRow
              title="Wind speed:"
              options={windSpeedUnitOptions}
              value={settings.windSpeed}
              onValueChange={onSettingsChange('windSpeed')}
            />
            <SettingsCardSwitcherRow
              title="Precipitation:"
              options={precipitationUnitOptions}
              value={settings.precipitation}
              onValueChange={onSettingsChange('precipitation')}
            />
            <SettingsCardSwitcherRow
              title="Pressure:"
              options={pressureUnitOptions}
              value={settings.pressure}
              onValueChange={onSettingsChange('pressure')}
            />
            <SettingsCardSwitcherRow
              title="Distance:"
              options={distanceUnitOptions}
              value={settings.distance}
              onValueChange={onSettingsChange('distance')}
            />
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Settings;
