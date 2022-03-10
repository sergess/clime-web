import { TIME_FORMATS } from 'client/constants';
import { ValueOf } from 'common/types';

export type TimeFormat = ValueOf<typeof TIME_FORMATS>;

export default TimeFormat;
