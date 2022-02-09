import { intervalToDuration, isToday, isAfter } from 'date-fns';
import pick from 'ramda/src/pick';
import takeWhile from 'ramda/src/takeWhile';

import { RadarLayer } from 'common/types/radar-layers';

import { ForecaLayer } from 'server/services/foreca-map.service/types';

import { parseFrame } from '../parse-frame.util';

export const prepareRadarLayer = (layer: ForecaLayer): RadarLayer => {
  const now = new Date();
  const frames = takeWhile<number>((frame) => {
    const date = parseFrame(frame);

    return !isAfter(date, now);
  }, layer.UTC);

  return {
    frames,
    updateTime: layer.updatetimeUTC,
    dates: frames.map((frame) => {
      const date = parseFrame(frame);
      const dateTime = date.toISOString();

      return {
        intervalToNow: pick(
          ['hours', 'minutes'],
          intervalToDuration({ start: date, end: now })
        ),
        today: isToday(date),
        dateTime,
      };
    }),
  };
};

export default prepareRadarLayer;
