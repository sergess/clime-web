import { MutableRefObject, useEffect } from 'react';

export const useMutationObserver = (
  ref: MutableRefObject<HTMLModElement>,
  callback: MutationCallback,
  config: MutationObserverInit
): void => {
  useEffect(() => {
    const observer = new MutationObserver(callback);
    if (ref.current) {
      observer.observe(ref.current, config);
    }
    return () => {
      observer.disconnect();
    };
  }, [callback, config]);
};

export default useMutationObserver;
