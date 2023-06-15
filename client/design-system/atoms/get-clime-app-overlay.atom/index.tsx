import { LinkBox, ComponentDefaultProps } from '@chakra-ui/react';
import { ReactElement, useMemo } from 'react';
import { useAtom } from 'jotai';
import { isMobile } from 'react-device-detect';

import { redirectToAppPopupOpened } from 'client/design-system/molecules/marketing-popup.organism/state/derivatives';
import { useHasMounted } from 'client/hooks';

export const GetClimeAppOverlay = ({
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
      return <LinkBox {...rest}>{children}</LinkBox>;
    }

    return (
      <LinkBox
        {...rest}
        onClick={(e) => {
          e.preventDefault();
          setPopupOpened(true);
        }}
      >
        {children}
      </LinkBox>
    );
  }, [hasMounted, isMobile]);
};

export default GetClimeAppOverlay;
