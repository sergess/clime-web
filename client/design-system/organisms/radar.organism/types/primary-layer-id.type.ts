import { RadarLayerId } from 'common/types';

export type PrimaryLayerId = Extract<RadarLayerId, RadarLayerId.RADAR>;

export default PrimaryLayerId;
