import { useMemo } from 'react';
import reduce from 'ramda/src/reduce';

import { isNumber } from 'common/utils';

import { ValueConfig } from '../../types';

export const useDomain = <T>(
  data: T[],
  valueConfigs: ValueConfig[]
): [number, number] =>
  useMemo(() => {
    const allYValues = reduce<T, number[]>(
      (values, item) => [
        ...values,
        ...(valueConfigs
          .map(({ getValue }) => getValue(item))
          .filter(isNumber) as number[]),
      ],
      [],
      data
    );

    return [Math.min(...allYValues), Math.max(...allYValues)];
  }, [data, valueConfigs]);

export default useDomain;
