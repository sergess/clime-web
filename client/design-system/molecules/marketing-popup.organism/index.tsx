import { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import { useOptimizeExperimentById } from 'client/hooks';
import {
  DEFAULT_EXPERIMENT_EVENT_NAME,
  POPUP_EXPERIMENT_ID,
} from 'client/hooks/use-optimize-experiment-by-id.hook/constants';

const FullScreenAppPromoPopup = dynamic(
  () =>
    import(
      'client/design-system/molecules/marketing-popup.organism/variants/full-screen-app-promo-popup.variant'
    )
);

const RedirectToAppPopup = dynamic(
  () =>
    import(
      'client/design-system/molecules/marketing-popup.organism/variants/redirect-to-app-popup.variant'
    ),
  {
    ssr: false,
  }
);

export const MarketingPopup = (): ReactElement | null => {
  const experiment = useOptimizeExperimentById(
    DEFAULT_EXPERIMENT_EVENT_NAME,
    POPUP_EXPERIMENT_ID
  );

  if (experiment === '0') {
    return <RedirectToAppPopup />;
  }

  if (experiment === '1') {
    return <FullScreenAppPromoPopup />;
  }

  return null;
};

export default MarketingPopup;
