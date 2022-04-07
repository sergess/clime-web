export type RadarLayer = {
  frames: number[];
  updateTime: string;
  dates: Array<{
    intervalToNow: Pick<Duration, 'hours' | 'minutes'>;
    dateTime: string;
  }>;
};

export default RadarLayer;
