import React, { ReactElement, useEffect, useState } from 'react';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { SearchIcon, CloseIcon } from 'client/design-system/atoms';
import { SearchProps } from './types';

export const Search = ({ onSearch, active }: SearchProps): ReactElement => {
  const { t } = useTranslation('header');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle('');
  }, [active]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <InputGroup maxW={{ base: '220px', md: '380px' }}>
        <Input
          h="36px"
          bg={active ? 'gray.50' : 'white'}
          w={active ? 'full' : '0px'}
          px={active ? '5' : '0px'}
          pr={active ? '5' : '0px'}
          textStyle="16-medium"
          borderRadius="2xl"
          border="0px"
          onChange={onChange}
          placeholder={t('Search Location')}
          value={title}
        />
        <InputRightElement
          cursor="pointer"
          h="36px"
          w="24px"
          me="2.5"
          onClick={onSearch}
        >
          {active ? (
            <CloseIcon w="24px" h="24px" />
          ) : (
            <SearchIcon w="24px" h="24px" />
          )}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Search;
