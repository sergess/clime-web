import { PRESSURE_UNITS } from 'client/constants/measurement-units/pressure.constant';

import { ValueOf } from 'common/types';

export type PressureUnit = ValueOf<typeof PRESSURE_UNITS>;

export default PressureUnit;
