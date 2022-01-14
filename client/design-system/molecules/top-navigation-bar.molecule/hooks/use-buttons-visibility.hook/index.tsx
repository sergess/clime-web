import { MutableRefObject } from 'react';

import { useScreenWidthSmallerThanMedium } from 'client/hooks';
import { UseButtonsVisibilityReturnValue } from './types';

const TOP_NAVIGATION_BUTTON_INDENT = 30;

export const useButtonsVisibility = (
  shift: number,
  ref: MutableRefObject<HTMLDivElement>
): UseButtonsVisibilityReturnValue => {
  const screenWidthSmallerThanMedium = useScreenWidthSmallerThanMedium();

  const scrollbarWidth = ref.current
    ? ref.current.scrollWidth - ref.current.clientWidth
    : 0;

  const leftButtonVisible =
    screenWidthSmallerThanMedium && shift > TOP_NAVIGATION_BUTTON_INDENT;
  const rightButtonVisible =
    screenWidthSmallerThanMedium &&
    shift < scrollbarWidth - TOP_NAVIGATION_BUTTON_INDENT;

  return {
    leftButtonVisible,
    rightButtonVisible,
  };
};

export default useButtonsVisibility;
