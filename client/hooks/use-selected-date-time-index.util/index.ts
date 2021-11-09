import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useAtomValue, useResetAtom } from 'jotai/utils';
import findIndex from 'ramda/src/findIndex';
import propEq from 'ramda/src/propEq';
import unless from 'ramda/src/unless';
import isNil from 'ramda/src/isNil';

import { selectedDateTimeAtom } from 'client/state/atoms';

import { UseSelectedDateTimeIndexData } from './types';

export const useSelectedDateTimeIndex = (
  data: UseSelectedDateTimeIndexData | null
): [number, Dispatch<SetStateAction<number>>] => {
  const selectedDateTimeAtomValue = useAtomValue(selectedDateTimeAtom);
  const resetSelectedDateTimeAtomValue = useResetAtom(selectedDateTimeAtom);

  const getSelectedDateTimeIndex = unless(
    isNil,
    findIndex(propEq('dateTime', selectedDateTimeAtomValue))
  );

  const [selectedDateTimeIndex, setSelectedDateTimeIndex] = useState<number>(0);

  useEffect(() => {
    const nextIndex = getSelectedDateTimeIndex(
      data as UseSelectedDateTimeIndexData
    );

    if (nextIndex !== -1) {
      setSelectedDateTimeIndex(nextIndex);
    }

    return () => {
      resetSelectedDateTimeAtomValue();
    };
  }, []);

  return [selectedDateTimeIndex, setSelectedDateTimeIndex];
};

export default useSelectedDateTimeIndex;
