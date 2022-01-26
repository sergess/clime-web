import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  FC,
  useCallback,
  CSSProperties,
  useMemo,
} from 'react';
import { Box, Skeleton, ComponentDefaultProps } from '@chakra-ui/react';
import { useAtomValue } from 'jotai/utils';

import { useMutationObserver } from 'client/hooks';
import { useAppConfig } from 'client/state/contexts/app-config.context/hooks';

import { adSenseScriptLoadingFailedAtom } from 'client/state/atoms';

import { AdStatus } from './types';

export const AdsenseBanner: FC<
  {
    client: string;
    slot: string;
    format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
    responsive?: boolean;
    layout?: 'in-article' | 'in-feed';
    stub?: ReactElement;
    styles?: CSSProperties;
  } & ComponentDefaultProps
> = ({
  client,
  slot,
  format = 'auto',
  responsive = true,
  layout = 'in-article',
  stub = undefined,
  styles = {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  ...wrapperStyles
}): ReactElement => {
  const [status, setStatus] = useState<AdStatus>(AdStatus.LOADING);

  const scriptLoadingError = useAtomValue(adSenseScriptLoadingFailedAtom);

  const appConfig = useAppConfig();

  const showAdvertisements = appConfig?.showAdvertisements;

  const bannerRef = useRef() as MutableRefObject<HTMLModElement>;

  const onBannerMutation = useCallback(() => {
    const adStatus = bannerRef?.current.getAttribute('data-ad-status');
    if (adStatus === 'filled') {
      setStatus(AdStatus.FILLED);
    } else if (adStatus === 'unfilled') {
      setStatus(AdStatus.UNFILLED);
    }
  }, [bannerRef]);

  useMutationObserver(bannerRef, onBannerMutation, { attributes: true });

  useEffect(() => {
    if (showAdvertisements) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('[AdsenseBanner]: ', err);
      }
    }
  }, [showAdvertisements]);

  const adVisible = useMemo(
    () =>
      showAdvertisements && !scriptLoadingError && status !== AdStatus.UNFILLED,
    [showAdvertisements, scriptLoadingError, status]
  );

  return (
    <>
      {adVisible ? (
        <Box {...wrapperStyles} pos="relative">
          <ins
            ref={bannerRef}
            className="adsbygoogle"
            style={styles}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive}
            data-ad-layout={layout}
          />
          {status === AdStatus.LOADING && (
            <Skeleton h="full" w="full" pos="absolute" top={0} />
          )}
        </Box>
      ) : (
        stub
      )}
    </>
  );
};

export default AdsenseBanner;
