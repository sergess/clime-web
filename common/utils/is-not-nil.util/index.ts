import isNil from 'ramda/src/isNil';
import complement from 'ramda/src/complement';

export const isNotNil = complement(isNil);

export default isNotNil;
