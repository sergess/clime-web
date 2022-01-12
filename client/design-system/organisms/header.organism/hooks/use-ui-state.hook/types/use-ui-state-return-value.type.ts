export type UseUiStateReturnValue = {
  searchOpened: boolean;
  searchVisible: boolean;
  onSearchClose: () => void;
  onSearchOpen: () => void;
  settingsOpened: boolean;
  settingsVisible: boolean;
  onSettingsOpen: () => void;
  onSettingsClose: () => void;
  logoVisible: boolean;
};

export default UseUiStateReturnValue;
