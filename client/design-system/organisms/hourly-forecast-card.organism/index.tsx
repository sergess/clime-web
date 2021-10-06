import { ReactElement, memo, useState, useCallback } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useAtomValue } from 'jotai/utils';

import { hourlyForecastCardAtom } from 'client/state/derivatives';
import { ClientOnly } from 'client/design-system/atoms';
import {
  ForecastCard,
  SelectableColumnBlock,
} from 'client/design-system/molecules';

import { Icon } from './atoms';

export const HourlyForecastCard = memo((): ReactElement => {
  const { t } = useTranslation('weather-today-page');
  const items = useAtomValue(hourlyForecastCardAtom);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const onSelect = useCallback((index: number) => {
    setSelectedItem(index);
  }, []);

  return (
    <ForecastCard
      heading={t('Hourly Forecast')}
      data={items}
      footer={
        <Button w="full" variant="cta" mx={3.5}>
          {t('Explore hourly forecast')}
        </Button>
      }
      renderItem={({ index, item }) => {
        const selected = index === selectedItem;

        return (
          <SelectableColumnBlock
            key={item.heading}
            selected={selected}
            onSelect={() => onSelect(index)}
            heading={
              <ClientOnly>
                <Text
                  textStyle={selected ? '12-bold' : '12-semi-bold'}
                  color={selected ? 'blue.500' : 'blue.800'}
                >
                  {item.heading}
                </Text>
              </ClientOnly>
            }
            main={
              <Icon
                my={2}
                boxSize="10"
                variant={item.variant}
                night={item.night}
                stateId={item.weatherStateId}
              />
            }
            footer={
              <ClientOnly>
                <Text
                  textStyle={selected ? '12-bold' : '12-semi-bold'}
                  color="blue.800"
                >
                  {item.footer}
                </Text>
              </ClientOnly>
            }
          />
        );
      }}
    />
  );
});

HourlyForecastCard.displayName = 'HourlyForecastCard';

export default HourlyForecastCard;
