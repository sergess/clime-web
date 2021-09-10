import { useEffect, EffectCallback, DependencyList } from 'react';

export const useClientEffect = (
  effect: EffectCallback,
  deps?: DependencyList
): void => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      effect();
    }
  }, deps);
};

export default useClientEffect;
