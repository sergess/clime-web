import isNil from 'ramda/src/isNil';
import unless from 'ramda/src/unless';

const dateTimeFormatRegex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

export const convertDateTimeToISOString = unless(
  isNil,
  (dateTime: string | null): string | null => {
    if (!dateTimeFormatRegex.test(dateTime as string)) {
      return null;
    }

    return `${(dateTime as string).replace(' ', 'T')}Z`;
  }
);

export default convertDateTimeToISOString;
