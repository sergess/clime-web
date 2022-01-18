import { SPEED_UNITS } from 'client/constants/measurement-units/speed.constant';

import { ValueOf } from 'common/types';

export type SpeedUnit = ValueOf<typeof SPEED_UNITS>;

export default SpeedUnit;
