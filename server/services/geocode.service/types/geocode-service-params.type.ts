import { Location } from 'common/types';

import { BaseApiV3ServiceParams } from 'server/services/base-api-v3.service';

export type GeocodeServiceParams = BaseApiV3ServiceParams & {
  locationFromCookies: Location;
};

export default GeocodeServiceParams;
