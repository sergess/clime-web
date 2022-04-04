import { parse } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { UTC } from 'common/constants';

export const parseFrame = (frame: number): Date =>
  zonedTimeToUtc(parse(`${frame}`, 'yyyyMMddHms', new Date()), UTC);

export default parseFrame;
