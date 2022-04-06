import { ReactElement } from 'react';

import { useHasMounted } from 'client/hooks';

import { ClientOnlyProps } from './types';

export const ClientOnly = ({
  children,
}: ClientOnlyProps): ReactElement | null => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
