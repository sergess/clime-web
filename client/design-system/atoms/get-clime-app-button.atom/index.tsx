import { Button, ComponentDefaultProps } from '@chakra-ui/react';
import { ReactElement, useMemo } from 'react';
import { useAtom } from 'jotai';
import { isMobile } from 'react-device-detect';

import { redirectToAppPopupOpened } from 'client/design-system/molecules/marketing-popup.organism/state/derivatives';
import { useHasMounted } from 'client/hooks';

export const GetClimeAppButton = ({
  children,
  ...rest
}: ComponentDefaultProps): ReactElement | null => {
  const hasMounted = useHasMounted();
  const [, setPopupOpened] = useAtom(redirectToAppPopupOpened);
  return useMemo(() => {
    if (!hasMounted) {
      return null;
    }

    if (isMobile) {
      return <Button {...rest}>{children}</Button>;
    }

    return (
      <Button
        {...rest}
        onClick={(e) => {
          e.preventDefault();
          setPopupOpened(true);
        }}
      >
        {children}
      </Button>
    );
  }, [hasMounted, isMobile]);
};

export default GetClimeAppButton;
