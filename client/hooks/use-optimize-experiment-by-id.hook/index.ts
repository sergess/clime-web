import { useEffect, useState } from 'react';

export const useOptimizeExperimentById = (
  event: string,
  id: string
): string => {
  const [experiment, setExperiment] = useState('0');

  useEffect(() => {
    // if(window && window.dataLayer) {
    //     window.dataLayer.push({
    //         event: {event},
    //         eventCallback: () => {
    //             const experimentType = window.google_optimize && window.google_optimize.get({id});
    //             console.log('experiment', experimentType);
    //             if(experimentType) {
    //                 setExperiment(experimentType);
    //             }
    //         }
    //     });
    // }
    window.dataLayer.push({ event: 'optimize.activate' });
    const interval = setInterval(() => {
      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get('0K6cc0Y1R1aPDHs1_CiVdg');
        console.log('1', variant);
        if (typeof variant !== 'undefined') setExperiment(variant);
        clearInterval(interval);
      }
    }, 1000);
  }, [event, id]);

  return experiment;
};

export default useOptimizeExperimentById;
