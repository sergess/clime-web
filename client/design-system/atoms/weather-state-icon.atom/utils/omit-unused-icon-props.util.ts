import omit from 'ramda/src/omit';

// [TODO] Find more elegant way how we can fix this
export const omitUnusedIconProps = omit(['night']);

export default omitUnusedIconProps;
