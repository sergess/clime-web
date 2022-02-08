import { TIME_FORMATS } from 'client/constants/measurement-units/time.constant';

import { ValueOf } from 'common/types';

export type TimeFormat = ValueOf<typeof TIME_FORMATS>;

export default TimeFormat;
