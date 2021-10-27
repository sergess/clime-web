import {
  IOS_STORE_LINK,
  ANDROID_STORE_LINK,
  WEB_FUNNEL_LINK,
} from 'client/constants';

export const getClimeAppLink = (mobile: boolean, ios: boolean): string => {
  if (mobile) {
    return ios ? IOS_STORE_LINK : ANDROID_STORE_LINK;
  }

  return WEB_FUNNEL_LINK;
};

export default getClimeAppLink;
