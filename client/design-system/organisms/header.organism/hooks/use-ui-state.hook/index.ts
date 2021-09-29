import { useDisclosure } from '@chakra-ui/react';
import { useScreenWidthSmallerThanMedium } from 'client/hooks';

import { UseUiStateReturnValue } from './types';

export const useUiState = (): UseUiStateReturnValue => {
  const {
    isOpen: searchOpened,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();
  const {
    isOpen: settingsOpened,
    onOpen: onSettingsOpen,
    onClose: onSettingsClose,
  } = useDisclosure();

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  const searchVisible = !(screenWidthSmallerThanMedium && settingsOpened);
  const settingsVisible = !(screenWidthSmallerThanMedium && searchOpened);

  return {
    searchOpened,
    searchVisible,
    onSearchClose,
    onSearchOpen,
    settingsOpened,
    settingsVisible,
    onSettingsOpen,
    onSettingsClose,
  };
};

export default useUiState;
