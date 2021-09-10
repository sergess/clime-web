import React, { ReactElement } from 'react';
import { isIOS, isMobile } from 'react-device-detect';
import { Link } from '@chakra-ui/react';

import { AppStoreIcon, GooglePlayIcon } from 'client/design-system/atoms';

export const Download = (): ReactElement => {
  if (isMobile) {
    if (isIOS) {
      return (
        <Link href="https://apps.apple.com/app/id749133753?mt=8" isExternal>
          <AppStoreIcon w="120px" h="40px" />
        </Link>
      );
    }
    return (
      <Link
        href="https://play.google.com/store/apps/details?id=com.apalon.weatherradar.free"
        isExternal
      >
        <GooglePlayIcon w="136px" h="40px" />
      </Link>
    );
  }

  return (
    <>
      <Link
        href="https://apps.apple.com/app/id749133753?mt=8"
        me="5"
        isExternal
      >
        <AppStoreIcon w="120px" h="40px" />
      </Link>
      <Link
        href="https://play.google.com/store/apps/details?id=com.apalon.weatherradar.free"
        isExternal
      >
        <GooglePlayIcon w="136px" h="40px" />
      </Link>
    </>
  );
};

export default Download;
