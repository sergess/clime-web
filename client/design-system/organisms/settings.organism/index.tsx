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
import includes from 'ramda/src/includes';

import { HeaderPopoverOverlay } from 'client/design-system/atoms';
import { settingsAtom } from 'client/state/derivatives';
import {
  DISTANCE_UNIT_VALUES,
  PRECIPITATION_UNIT_VALUES,
  PRESSURE_UNIT_VALUES,
  TEMPERATURE_UNIT_VALUES,
  SPEED_UNIT_VALUES,
} from 'client/constants/measurement-units';
import { Settings as SettingsType } from 'client/types';
import { useScreenWidthSmallerThan } from 'client/hooks';
import climeTheme from 'client/theme';

import { trackEvent } from 'client/services';
import { ValueOf } from 'common/types';
import { SETTINGS_CHANGE } from 'client/services/analytics.service/constants';
import { TIME_FORMAT_VALUES } from 'client/constants';

import { SettingsCardSwitcherRow } from './molecules';
import { SETTINGS_LABELS } from './constants';

import { SettingsTogglerProps } from './types';

export const Settings = ({
  opened,
  onOpen,
  onClose,
}: SettingsTogglerProps): ReactElement => {
  const { t } = useTranslation('common');
  const settingsCardRef = useRef<HTMLDivElement>(null);

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThan(
    climeTheme.breakpoints.md
  );

  const [settings, setSettings] = useAtom(settingsAtom);

  const getSwitcherOptions = useCallback(
    (unitValues: ValueOf<SettingsType>[]) =>
      unitValues.map((value) => {
        const label = t(SETTINGS_LABELS[value]);

        return {
          value,
          label: includes(value, TEMPERATURE_UNIT_VALUES)
            ? `\u00b0${label}`
            : label,
        };
      }),
    []
  );

  const temperatureUnitOptions = useMemo(
    () => getSwitcherOptions(TEMPERATURE_UNIT_VALUES),
    []
  );
  const windSpeedUnitOptions = useMemo(
    () => getSwitcherOptions(SPEED_UNIT_VALUES),
    []
  );
  const precipitationUnitOptions = useMemo(
    () => getSwitcherOptions(PRECIPITATION_UNIT_VALUES),
    []
  );
  const pressureUnitOptions = useMemo(
    () => getSwitcherOptions(PRESSURE_UNIT_VALUES),
    []
  );
  const distanceUnitOptions = useMemo(
    () => getSwitcherOptions(DISTANCE_UNIT_VALUES),
    []
  );
  const timeFormatOptions = useMemo(
    () => getSwitcherOptions(TIME_FORMAT_VALUES),
    []
  );

  const onSettingsChange = useCallback(
    (unit: keyof SettingsType) => (value: ValueOf<SettingsType>) => {
      setSettings({ [unit]: value });
      trackEvent(SETTINGS_CHANGE, {
        SettingName: unit,
        NewValue: value,
      });
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
          className="settings"
          align="center"
          justify="space-between"
          cursor="pointer"
          ms={[4, 4, 5]}
          h={{ md: '36px' }}
          w={{ md: '80px' }}
          flex="none"
          bg={{ md: 'gray.50' }}
          borderRadius="3xl"
          ps={{ md: '3.5' }}
          pe={{ md: '2.5' }}
          onClick={opened ? onClose : onOpen}
        >
          <Text
            sx={{
              [`@media not screen and (min-width: ${climeTheme.breakpoints.md})`]:
                {
                  display: 'none',
                },
            }}
            textStyle="16-medium"
          >
            &#176;{t(SETTINGS_LABELS[settings.temperature])}
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
            <SettingsCardSwitcherRow
              title="Time format:"
              options={timeFormatOptions}
              value={settings.timeFormat}
              onValueChange={onSettingsChange('timeFormat')}
            />
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Settings;
