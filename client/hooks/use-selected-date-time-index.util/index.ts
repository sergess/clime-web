import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useAtomValue, useResetAtom, RESET } from 'jotai/utils';
import { WritableAtom } from 'jotai';
import findIndex from 'ramda/src/findIndex';
import propEq from 'ramda/src/propEq';
import unless from 'ramda/src/unless';
import isNil from 'ramda/src/isNil';
import ifElse from 'ramda/src/ifElse';
import pipe from 'ramda/src/pipe';
import equals from 'ramda/src/equals';
import always from 'ramda/src/always';
import identity from 'ramda/src/identity';

import { UseSelectedDateTimeIndexData } from './types';

const setZeroIfNotFound = ifElse(equals(-1), always(0), identity);

export const useSelectedDateTimeIndex = (
  data: UseSelectedDateTimeIndexData | null,
  selectedDateTimeAtom: WritableAtom<string | null, typeof RESET>
): [number, Dispatch<SetStateAction<number>>] => {
  const selectedDateTimeAtomValue = useAtomValue(selectedDateTimeAtom);
  const resetSelectedDateTimeAtomValue = useResetAtom(selectedDateTimeAtom);

  const getSelectedDateTimeIndex = unless(
    isNil,
    pipe(
      findIndex(propEq('dateTime', selectedDateTimeAtomValue)),
      setZeroIfNotFound
    )
  );

  const dateTimeIndex = getSelectedDateTimeIndex(
    data as UseSelectedDateTimeIndexData
  );

  const [selectedDateTimeIndex, setSelectedDateTimeIndex] =
    useState<number>(dateTimeIndex);

  useEffect(
    () => () => {
      resetSelectedDateTimeAtomValue();
    },
    []
  );

  return [selectedDateTimeIndex, setSelectedDateTimeIndex];
};

export default useSelectedDateTimeIndex;
