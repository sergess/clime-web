import { ReactElement } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

import Search from '../../public/icons/search.svg';

export const SearchIcon = (props: IconProps): ReactElement => (
  <Icon as={Search} {...props} />
);

export default SearchIcon;
