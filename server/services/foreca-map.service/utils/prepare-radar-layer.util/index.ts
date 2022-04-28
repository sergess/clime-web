import { intervalToDuration, sub, isWithinInterval } from 'date-fns';
import pick from 'ramda/src/pick';

import { RadarLayer } from 'common/types/radar-layers';

import { ForecaLayer } from 'server/services/foreca-map.service/types';

import { parseFrame } from '../parse-frame.util';

export const prepareRadarLayer = (layer: ForecaLayer): RadarLayer => {
  const now = new Date();
  const start = sub(now, { minutes: 40 });

  const frames = layer.UTC.filter((frame) => {
    const date = parseFrame(frame);

    return isWithinInterval(date, {
      start,
      end: now,
    });
  });

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
        dateTime,
      };
    }),
  };
};

export default prepareRadarLayer;
