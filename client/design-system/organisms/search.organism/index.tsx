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

import { useAutocomplete, useScreenWidthSmallerThanMedium } from 'client/hooks';
import { WEATHER_TODAY } from 'client/constants';
import {
  Arrow2Icon,
  HeaderCardPopoverRow,
  HeaderPopoverOverlay,
} from 'client/design-system/atoms';

import { LocationData } from 'common/types';

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
        <InputGroup maxW={{ base: '100%', md: '380px' }}>
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
              onClick={clearSearch}
              aria-label="Location search"
              _hover={{
                bg: 'transparent',
              }}
              icon={
                <Image src="/icons/close.svg" width={24} height={24} alt="" />
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
                const { slug, latitude, longitude, name } = locationData;

                return (
                  <HeaderCardPopoverRow
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
                          <Link passHref href={`${WEATHER_TODAY}/${slug}`}>
                            <LinkOverlay onClick={onClose}>{name}</LinkOverlay>
                          </Link>
                        </Text>
                        <Arrow2Icon boxSize={5} />
                      </Flex>
                    </LinkBox>
                  </HeaderCardPopoverRow>
                );
              })}
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  ) : (
    <IconButton
      variant="ghost"
      borderRadius="full"
      onClick={onOpen}
      aria-label="Location search"
      minW="auto"
      p="0 0.625em"
      _hover={{
        bg: 'gray.50',
      }}
      icon={<Image src="/icons/search.svg" width={24} height={24} alt="" />}
    />
  );
};

export default Search;
