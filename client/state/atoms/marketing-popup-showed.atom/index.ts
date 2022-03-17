import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const MARKETING_POPUP_STORAGE_PREFIX = 'clm.mp';

export const marketingPopupShowed = atomWithStorage<boolean>(
  MARKETING_POPUP_STORAGE_PREFIX,
  true,
  createJSONStorage(() => sessionStorage)
);

export default marketingPopupShowed;
