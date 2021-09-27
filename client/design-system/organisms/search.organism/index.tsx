import React, { ReactElement, useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import {
  InputGroup,
  Input,
  InputRightElement,
  Flex,
  Text,
  Spinner,
  LinkBox,
  LinkOverlay,
  useOutsideClick,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useAutocomplete, useScreenWidthSmallerThanMedium } from 'client/hooks';
import {
  CloseIcon,
  Arrow2Icon,
  HeaderCardPopoverRow,
} from 'client/design-system/atoms';
import { HeaderCardPopover } from 'client/design-system/molecules';

import { LocationData } from 'common/types';

import { SearchProps } from './types';

export const Search = ({ onSearchEnd }: SearchProps): ReactElement => {
  const { t } = useTranslation('header');

  const suggestionsRef = useRef<HTMLDivElement>(null);
  const searchGroupRef = useRef(null);
  const searchInputRef = useRef(null);

  const [location, setLocation] = useState<string>('');
  const [suggestions, setSuggestions] = useState<LocationData[] | null>(null);

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  useOutsideClick({
    ref: searchInputRef,
    handler: ({ target }) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef?.current?.contains(target as Node)
      ) {
        onSearchEnd();
      }
    },
  });

  const onLocationChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(target.value);

    if (target.value.length < 2) {
      setSuggestions(null);
    }
  };

  const { data: autocompleteResults, error } = useAutocomplete(location);
  const loading = !!autocompleteResults && !autocompleteResults && !error;

  useEffect(() => {
    if (autocompleteResults) {
      setSuggestions(
        autocompleteResults.filter(
          ({ countryCode, city }) => !!countryCode && !!city
        )
      );
    }
  }, [autocompleteResults]);

  return (
    <HeaderCardPopover
      trigger={
        <InputGroup ref={searchGroupRef} maxW={{ base: '100%', md: '380px' }}>
          <Input
            autoFocus
            ref={searchInputRef}
            h={9}
            bg="gray.50"
            w="full"
            textStyle="16-medium"
            borderRadius="2xl"
            border="0px"
            onChange={onLocationChange}
            placeholder={t('Search Location')}
            value={location}
          />
          <InputRightElement cursor="pointer" h="36px" w="auto">
            {loading && (
              <Center>
                <Spinner size="sm" color="blue.500" />
              </Center>
            )}

            <IconButton
              variant="ghost"
              borderRadius="full"
              onClick={(e) => {
                e.stopPropagation();
                onSearchEnd();
              }}
              aria-label="Location search"
              _hover={{
                bg: 'transparent',
              }}
              icon={<CloseIcon boxSize={6} />}
            />
          </InputRightElement>
        </InputGroup>
      }
      content={
        <Flex ref={suggestionsRef} direction="column" w="100%">
          {suggestions &&
            suggestions.length > 0 &&
            suggestions.map(
              (
                {
                  city,
                  country,
                  countryCode,
                  forecastZoneId,
                  latitude,
                  longitude,
                },
                i
              ) => (
                <HeaderCardPopoverRow
                  key={`${forecastZoneId}-${latitude}-${longitude}`}
                  first={i === 0}
                >
                  <LinkBox as={Flex} w="100%" direction="column" px={4}>
                    <Flex justify="space-between" py="1.125em">
                      <Text
                        textStyle="16-medium"
                        color="blue.800"
                        display="inline-block"
                        whiteSpace="nowrap"
                        noOfLines={1}
                      >
                        <Link
                          passHref
                          href={encodeURI(
                            `/weather-today/${countryCode}/${city}/${forecastZoneId}`
                          )}
                        >
                          <LinkOverlay onClick={onSearchEnd}>
                            {city}, {country}
                          </LinkOverlay>
                        </Link>
                      </Text>
                      <Arrow2Icon boxSize={5} />
                    </Flex>
                  </LinkBox>
                </HeaderCardPopoverRow>
              )
            )}
        </Flex>
      }
      popoverProps={{
        initialFocusRef: searchInputRef,
        matchWidth: !screenWidthSmallerThanMedium,
      }}
    />
  );
};

export default Search;
