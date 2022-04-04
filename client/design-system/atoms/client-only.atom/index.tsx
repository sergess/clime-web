import { ReactElement, FC } from 'react';

import { useHasMounted } from 'client/hooks';

export const ClientOnly: FC = ({ children }): ReactElement | null => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
