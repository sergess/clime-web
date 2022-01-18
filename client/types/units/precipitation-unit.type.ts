import { PRECIPITATION_UNITS } from 'client/constants/measurement-units/precipitation.constant';

import { ValueOf } from 'common/types';

export type PrecipitationUnit = ValueOf<typeof PRECIPITATION_UNITS>;

export default PrecipitationUnit;
