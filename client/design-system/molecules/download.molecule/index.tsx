import React, { ReactElement } from 'react';
import { Link } from '@chakra-ui/react';
import { isMobile as mobile, isIOS as ios } from 'react-device-detect';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  IOS_STORE_LINK,
  ANDROID_STORE_LINK,
  STORE_LINK_UAC,
} from 'client/constants';

export const Download = (): ReactElement => {
  const router = useRouter();
  const isSomePage = router?.asPath === '/climeapp';

  if (mobile) {
    return ios ? (
      <Link
        href={isSomePage ? STORE_LINK_UAC : IOS_STORE_LINK}
        aria-label="App store"
        isExternal
      >
        <Image src="/icons/app-store.svg" width={120} height={40} alt="" />
      </Link>
    ) : (
      <Link
        href={isSomePage ? STORE_LINK_UAC : ANDROID_STORE_LINK}
        aria-label="Google play"
        isExternal
      >
        <Image src="/icons/google-play.svg" width={136} height={40} alt="" />
      </Link>
    );
  }

  return (
    <>
      <Link
        href={isSomePage ? STORE_LINK_UAC : IOS_STORE_LINK}
        aria-label="App store"
        me="5"
        isExternal
      >
        <Image src="/icons/app-store.svg" width={120} height={40} alt="" />
      </Link>
      <Link
        href={isSomePage ? STORE_LINK_UAC : ANDROID_STORE_LINK}
        aria-label="Google play"
        isExternal
      >
        <Image src="/icons/google-play.svg" width={136} height={40} alt="" />
      </Link>
    </>
  );
};

export default Download;
