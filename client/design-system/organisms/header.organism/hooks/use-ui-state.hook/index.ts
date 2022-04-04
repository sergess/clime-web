import { useDisclosure } from '@chakra-ui/react';

import climeTheme from 'client/theme';
import { useScreenWidthSmallerThan } from 'client/hooks';

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

  const screenWidthSmallerThanMedium = useScreenWidthSmallerThan(
    climeTheme.breakpoints.md
  );

  const searchVisible = !(screenWidthSmallerThanMedium && settingsOpened);
  const settingsVisible = !searchOpened;
  const logoVisible = !(screenWidthSmallerThanMedium && searchOpened);

  return {
    searchOpened,
    searchVisible,
    onSearchClose,
    onSearchOpen,
    settingsOpened,
    settingsVisible,
    onSettingsOpen,
    onSettingsClose,
    logoVisible,
  };
};

export default useUiState;
