import { ReactElement } from 'react';

import { LAYOUT_HORIZONTAL_PADDING } from 'client/constants';

import { Fullscreen } from './fullscreen.control';
import { Legend } from './legend.control';
import { Player } from './player.control';
import { Zoom } from './zoom.control';

// [todo] move zIndex to constants ABOVE_THE_MAP, MAP, SETTINGS, еtс
export const Controls = (): ReactElement => (
  <>
    <Zoom
      pos="absolute"
      zIndex={1200}
      bottom="260px"
      right={LAYOUT_HORIZONTAL_PADDING}
    />

    <Fullscreen
      pos="absolute"
      zIndex={1200}
      bottom="140px"
      right={LAYOUT_HORIZONTAL_PADDING}
    />

    <Player
      pos="absolute"
      zIndex={1200}
      w="full"
      bottom="52px"
      px={LAYOUT_HORIZONTAL_PADDING}
    />

    <Legend pos="absolute" zIndex={1200} w="full" bottom={0} />
  </>
);

export default Controls;
