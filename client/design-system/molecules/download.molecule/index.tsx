import React, { ReactElement } from 'react';
import { Link } from '@chakra-ui/react';

import { AppStoreIcon, GooglePlayIcon } from 'client/design-system/atoms';
import { IOS_STORE_LINK, ANDROID_STORE_LINK } from 'client/constants';

import { DownloadProps } from './types';

export const Download = ({ mobile, ios }: DownloadProps): ReactElement => {
  if (mobile) {
    return ios ? (
      <Link href={IOS_STORE_LINK} isExternal>
        <AppStoreIcon w="120px" h="40px" />
      </Link>
    ) : (
      <Link href={ANDROID_STORE_LINK} isExternal>
        <GooglePlayIcon w="136px" h="40px" />
      </Link>
    );
  }

  return (
    <>
      <Link href={IOS_STORE_LINK} me="5" isExternal>
        <AppStoreIcon w="120px" h="40px" />
      </Link>
      <Link href={ANDROID_STORE_LINK} isExternal>
        <GooglePlayIcon w="136px" h="40px" />
      </Link>
    </>
  );
};

export default Download;
