import React, {
  ReactElement,
  useCallback,
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import {
  Flex,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';

import {
  CloseIcon,
  SettingsIcon,
  HeaderCardPopoverRow,
  HeaderPopoverOverlay,
} from 'client/design-system/atoms';
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
  const [updatedSettings, setUpdatedSettings] = useState<SettingsType | null>(
    null
  );
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

  const onUpdatedSettingsChange = useCallback(
    (unit: keyof SettingsType) => (value: ValueOf<SettingsType>) => {
      setUpdatedSettings((previousSettings) => ({
        ...((!!previousSettings && previousSettings) as SettingsType),
        [unit]: value,
      }));
    },
    []
  );

  const onSave = useCallback(() => {
    setSettings(updatedSettings as SettingsType);
    onClose();
  }, [updatedSettings]);

  useEffect(() => {
    setUpdatedSettings(null);
  }, [opened]);

  return (
    <Popover
      isOpen={opened}
      placement="bottom"
      gutter={screenWidthSmallerThanMedium ? 26 : 36}
      variant="card"
    >
      <PopoverTrigger>
        <Flex
          align="center"
          justify="space-between"
          cursor="pointer"
          ms={[1.5, 1.5, 5]}
          h="36px"
          w="80px"
          flex="none"
          bg="gray.50"
          borderRadius="2xl"
          ps="3.5"
          pe="1.5"
          onClick={opened ? onClose : onOpen}
        >
          <Text textStyle="16-medium">{t(settings.temperature)}</Text>

          {opened ? <CloseIcon boxSize={6} /> : <SettingsIcon boxSize={6} />}
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
              value={updatedSettings?.temperature || settings.temperature}
              onValueChange={onUpdatedSettingsChange('temperature')}
            />
            <SettingsCardSwitcherRow
              title="Wind speed:"
              options={windSpeedUnitOptions}
              value={updatedSettings?.windSpeed || settings.windSpeed}
              onValueChange={onUpdatedSettingsChange('windSpeed')}
            />
            <SettingsCardSwitcherRow
              title="Precipitation:"
              options={precipitationUnitOptions}
              value={updatedSettings?.precipitation || settings.precipitation}
              onValueChange={onUpdatedSettingsChange('precipitation')}
            />
            <SettingsCardSwitcherRow
              title="Pressure:"
              options={pressureUnitOptions}
              value={updatedSettings?.pressure || settings.pressure}
              onValueChange={onUpdatedSettingsChange('pressure')}
            />
            <SettingsCardSwitcherRow
              title="Distance:"
              options={distanceUnitOptions}
              value={updatedSettings?.distance || settings.distance}
              onValueChange={onUpdatedSettingsChange('distance')}
            />

            <HeaderCardPopoverRow
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="cta"
                w="calc(100% - 68px)"
                my={5}
                disabled={!updatedSettings}
                onClick={onSave}
              >
                {t('Save')}
              </Button>
            </HeaderCardPopoverRow>
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Settings;
