import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const redirectToAppPopupOpened = atomWithStorage<boolean>(
  'clm.rtapo',
  true,
  createJSONStorage(() => sessionStorage)
);

export default redirectToAppPopupOpened;
