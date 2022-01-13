import { DISTANCE_UNITS } from 'client/constants/measurement-units/distance.constant';

import { ValueOf } from 'common/types';

export type DistanceUnit = ValueOf<typeof DISTANCE_UNITS>;

export default DistanceUnit;
