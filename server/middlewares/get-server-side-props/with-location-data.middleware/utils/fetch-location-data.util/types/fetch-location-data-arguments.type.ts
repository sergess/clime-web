import { Location } from 'common/types';

export type FetchLocationDataArguments = {
  userAgentHeader: string | undefined;
  locationFromCookies: Location;
  autolocation: boolean;
  slug: string | undefined;
  language: string;
};

export default FetchLocationDataArguments;
