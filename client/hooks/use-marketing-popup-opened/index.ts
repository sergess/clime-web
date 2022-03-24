import { useAtomValue } from 'jotai/utils';
import { isDesktop as desktop } from 'react-device-detect';

import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';
import { redirectToAppPopupOpened } from 'client/design-system/molecules/marketing-popup.organism/state/atoms';

export const useMarketingPopupOpened = (): boolean => {
  const popupOpened = useAtomValue(redirectToAppPopupOpened);

  const appConfig = useAppConfig();

  if (!appConfig) return false;

  const { showRedirectToAppPopup } = appConfig;

  return showRedirectToAppPopup && popupOpened && !desktop;
};

export default useMarketingPopupOpened;
