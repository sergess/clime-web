import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const fullScreenAppPromoPopupOpened = atomWithStorage<boolean>(
  'clm.fsappo',
  true,
  createJSONStorage(() => sessionStorage)
);

export default fullScreenAppPromoPopupOpened;
