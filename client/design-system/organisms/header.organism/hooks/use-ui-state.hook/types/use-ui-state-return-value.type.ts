export type UseUiStateReturnValue = {
  searchOpened: boolean;
  searchVisible: boolean;
  onSearchClose: () => void;
  onSearchOpen: () => void;
  settingsOpened: boolean;
  settingsVisible: boolean;
  onSettingsOpen: () => void;
  onSettingsClose: () => void;
};

export default UseUiStateReturnValue;
