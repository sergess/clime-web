import { TEMPERATURE_UNITS } from 'client/constants/measurement-units/temperature.constant';

import { ValueOf } from 'common/types';

export type TemperatureUnit = ValueOf<typeof TEMPERATURE_UNITS>;

export default TemperatureUnit;
