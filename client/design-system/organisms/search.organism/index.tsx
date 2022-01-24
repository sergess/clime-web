import React, {
  ReactElement,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  InputGroup,
  Input,
  InputRightElement,
  Flex,
  Text,
  Spinner,
  LinkBox,
  LinkOverlay,
  IconButton,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { getLocationName } from 'client/utils';
import { useAutocomplete, useScreenWidthSmallerThanMedium } from 'client/hooks';
import { WEATHER_TODAY } from 'client/constants';
import {
  Arrow2Icon,
  HeaderCardPopoverRow,
  HeaderPopoverOverlay,
} from 'client/design-system/atoms';
import { trackEvent } from 'client/services';

import { LocationData } from 'common/types';

import { LOCATION_SEARCH_NO_RESULT } from 'client/services/analytics.service/constants';
import { SearchProps } from './types';

export const Search = ({
  opened,
  onOpen,
  onClose,
}: SearchProps): ReactElement => {
  const { t } = useTranslation('common');

  const searchInputRef = useRef<HTMLInputElement>(null);

  const [location, setLocation] = useState<string>('');
  const [suggestions, setSuggestions] = useState<LocationData[] | null>(null);

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  const onLocationChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setLocation(target.value);

      if (target.value.length < 2) {
        setSuggestions(null);
      }
    },
    []
  );

  const clearSearch = useCallback(() => {
    setLocation('');
    setSuggestions(null);
    searchInputRef.current?.focus();
  }, []);

  const { data: autocompleteResults, error } = useAutocomplete(location);
  const loading = !!autocompleteResults && !autocompleteResults && !error;

  useEffect(() => {
    setLocation('');
    setSuggestions(null);
  }, [opened]);

  useEffect(() => {
    if (autocompleteResults) {
      setSuggestions(autocompleteResults.filter(({ slug }) => !!slug));
    }
  }, [autocompleteResults]);

  useEffect(() => {
    if (suggestions && suggestions.length === 0)
      trackEvent(LOCATION_SEARCH_NO_RESULT);
  }, [suggestions]);

  return opened ? (
    <Popover
      isOpen={opened}
      placement="bottom"
      gutter={screenWidthSmallerThanMedium ? 26 : 36}
      variant="search-card"
      initialFocusRef={searchInputRef}
      matchWidth={!screenWidthSmallerThanMedium}
    >
      <PopoverTrigger>
        <InputGroup maxW={{ base: '100%', md: '340px' }}>
          <Input
            autoFocus
            ref={searchInputRef}
            _placeholder={{ color: 'blue.50' }}
            h={9}
            bg="gray.50"
            w="full"
            textStyle="16-medium"
            borderRadius="2xl"
            border="0px"
            onChange={onLocationChange}
            placeholder={t('Enter City or Zip Code')}
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
              onClick={clearSearch}
              aria-label="Enter City or Zip Code"
              _hover={{
                bg: 'transparent',
              }}
              icon={
                <Image
                  src={`/icons/${
                    location.length >= 1 ? 'close' : 'search'
                  }.svg`}
                  width={24}
                  height={24}
                  alt={location.length >= 1 ? 'Close' : 'Search'}
                />
              }
            />
          </InputRightElement>
        </InputGroup>
      </PopoverTrigger>
      <Portal>
        {opened && <HeaderPopoverOverlay onClick={onClose} />}

        <PopoverContent w="full">
          <Flex direction="column" w="100%">
            {suggestions &&
              suggestions.length > 0 &&
              suggestions.map((locationData, i) => {
                const { slug, latitude, longitude } = locationData;

                return (
                  <HeaderCardPopoverRow
                    className="search-result"
                    key={`${slug}-${latitude}-${longitude}`}
                    first={i === 0}
                    _hover={{
                      bg: 'gray.50',
                    }}
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
                          <Link passHref href={`/${WEATHER_TODAY}/${slug}`}>
                            <LinkOverlay onClick={onClose}>
                              {getLocationName(locationData)}
                            </LinkOverlay>
                          </Link>
                        </Text>
                        <Arrow2Icon boxSize={5} />
                      </Flex>
                    </LinkBox>
                  </HeaderCardPopoverRow>
                );
              })}
            {suggestions && suggestions.length === 0 && (
              <Flex p={4}>
                <Flex bg="gray.50" boxSize="40px" p={2} borderRadius="xl">
                  <Image
                    src="/icons/no-result.svg"
                    width={24}
                    height={24}
                    alt="No result"
                  />
                </Flex>
                <Flex flexDirection="column" ps={4}>
                  <Text textStyle="16-bold" color="blue.800">
                    {t('No results')}
                  </Text>
                  <Text textStyle="14-medium" color="blue.800" pt={2}>
                    {t('Try another location or zip code.')}
                  </Text>
                </Flex>
              </Flex>
            )}
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  ) : (
    <InputGroup
      onClick={onOpen}
      w={{ base: '128px', md: '340px' }}
      className="search-field"
    >
      <Input
        h={9}
        bg="gray.50"
        _placeholder={{ color: 'blue.50' }}
        w="full"
        textStyle="16-medium"
        borderRadius="2xl"
        border="0px"
        placeholder={t('Search')}
      />
      <InputRightElement h="36px">
        <Image src="/icons/search.svg" width={24} height={24} alt="Search" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
