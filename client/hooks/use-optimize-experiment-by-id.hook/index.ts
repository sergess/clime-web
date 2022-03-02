import { useEffect, useState } from 'react';

export const useOptimizeExperimentById = (
  eventName: string,
  id: string
): string | null => {
  const [experiment, setExperiment] = useState<string | null>(null);

  useEffect(() => {
    if (window && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        eventCallback: () => {
          const experimentType =
            window.google_optimize && window.google_optimize.get(id);
          if (experimentType) {
            setExperiment(experimentType);
          }
        },
      });
    }
  }, [eventName, id]);

  return experiment;
};

export default useOptimizeExperimentById;
