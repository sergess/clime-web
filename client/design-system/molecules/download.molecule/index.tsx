import React, { ReactElement } from 'react';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';

import { IOS_STORE_LINK, ANDROID_STORE_LINK } from 'client/constants';

import { DownloadProps } from './types';

export const Download = ({ mobile, ios }: DownloadProps): ReactElement => {
  if (mobile) {
    return ios ? (
      <Link href={IOS_STORE_LINK} isExternal>
        <Image src="/icons/app-store.svg" width={120} height={40} alt="" />
      </Link>
    ) : (
      <Link href={ANDROID_STORE_LINK} isExternal>
        <Image src="/icons/google-play.svg" width={136} height={40} alt="" />
      </Link>
    );
  }

  return (
    <>
      <Link href={IOS_STORE_LINK} me="5" isExternal>
        <Image src="/icons/app-store.svg" width={120} height={40} alt="" />
      </Link>
      <Link href={ANDROID_STORE_LINK} isExternal>
        <Image src="/icons/google-play.svg" width={136} height={40} alt="" />
      </Link>
    </>
  );
};

export default Download;
