import pipe from 'ramda/src/pipe';
import split from 'ramda/src/split';
import take from 'ramda/src/take';
import isNil from 'ramda/src/isNil';
import unless from 'ramda/src/unless';
import join from 'ramda/src/join';

export const extractValidWeatherStateId = unless(
  isNil,
  pipe(split(':'), take(2), join(':'))
) as (value: string | null) => string | null;

export default extractValidWeatherStateId;
