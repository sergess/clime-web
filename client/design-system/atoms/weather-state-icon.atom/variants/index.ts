import dynamic from 'next/dynamic';

import {
  BLIZZARD,
  BLOWING_DUST,
  BLOWING_SAND,
  BLOWING_SNOW,
  BLOWING_SPRAY,
  LIGHT_DRIZZLE,
  DRIZZLE,
  HEAVY_DRIZZLE,
  FOG,
  LIGHT_FREEZING_DRIZZLE,
  FREEZING_DRIZZLE,
  HEAVY_FREEZING_DRIZZLE,
  FREEZING_RAIN,
  FREEZING_SPRAY,
  HAZE,
  HEAVY_FREEZING_RAIN,
  HEAVY_ICE_PELLETS_SHOWERS,
  HEAVY_ICE_PELLETS,
  HEAVY_RAIN_SHOWERS,
  HEAVY_RAIN,
  HEAVY_SLEET,
  HEAVY_SNOW_SHOWERS,
  HEAVY_SNOW,
  ICE_FOG,
  ICE_PELLETS_SHOWERS,
  ICE_PELLETS,
  LIGHT_FREEZING_RAIN,
  LIGHT_ICE_PELLETS_SHOWERS,
  LIGHT_ICE_PELLETS,
  LIGHT_RAIN_SHOWERS,
  LIGHT_RAIN,
  LIGHT_SLEET,
  LIGHT_SNOW_SHOWERS,
  LIGHT_SNOW,
  MIST,
  MOSTLY_CLOUDY,
  MOSTLY_SUNNY,
  OVERCAST,
  PARTLY_CLOUDY,
  RAIN_SHOWERS,
  RAIN,
  SLEET,
  SMOKE,
  SNOW,
  SQUALL,
  SUNNY,
  THUNDERSTORM,
  VOLCANIC_ASH,
  WATERSPOUT,
} from 'client/constants';

const variants = {
  [BLIZZARD]: dynamic(() => import('./blizzard-icon.variant')),
  [BLOWING_DUST]: dynamic(() => import('./blowing-dust-icon.variant')),
  [BLOWING_SAND]: dynamic(() => import('./blowing-sand-icon.variant')),
  [BLOWING_SNOW]: dynamic(() => import('./blowing-snow-icon.variant')),
  [BLOWING_SPRAY]: dynamic(() => import('./blowing-spray-icon.variant')),
  [LIGHT_DRIZZLE]: dynamic(() => import('./drizzle-icon.variant')),
  [DRIZZLE]: dynamic(() => import('./drizzle-icon.variant')),
  [HEAVY_DRIZZLE]: dynamic(() => import('./drizzle-icon.variant')),
  [FOG]: dynamic(() => import('./fog-icon.variant')),
  [LIGHT_FREEZING_DRIZZLE]: dynamic(
    () => import('./freezing-drizzle-icon.variant')
  ),
  [FREEZING_DRIZZLE]: dynamic(() => import('./freezing-drizzle-icon.variant')),
  [HEAVY_FREEZING_DRIZZLE]: dynamic(
    () => import('./freezing-drizzle-icon.variant')
  ),
  [FREEZING_RAIN]: dynamic(() => import('./freezing-rain-icon.variant')),
  [FREEZING_SPRAY]: dynamic(() => import('./freezing-spray-icon.variant')),
  [HAZE]: dynamic(() => import('./haze-icon.variant')),
  [HEAVY_FREEZING_RAIN]: dynamic(
    () => import('./heavy-freezing-rain-icon.variant')
  ),
  [HEAVY_ICE_PELLETS_SHOWERS]: dynamic(
    () => import('./heavy-ice-pellets-showers-icon.variant')
  ),
  [HEAVY_ICE_PELLETS]: dynamic(
    () => import('./heavy-ice-pellets-icon.variant')
  ),
  [HEAVY_RAIN_SHOWERS]: dynamic(
    () => import('./heavy-rain-showers-icon.variant')
  ),
  [HEAVY_RAIN]: dynamic(() => import('./heavy-rain-icon.variant')),
  [HEAVY_SLEET]: dynamic(() => import('./heavy-sleet-icon.variant')),
  [HEAVY_SNOW_SHOWERS]: dynamic(
    () => import('./heavy-snow-showers-icon.variant')
  ),
  [HEAVY_SNOW]: dynamic(() => import('./heavy-snow-icon.variant')),
  [ICE_FOG]: dynamic(() => import('./ice-fog-icon.variant')),
  [ICE_PELLETS_SHOWERS]: dynamic(
    () => import('./ice-pellets-showers-icon.variant')
  ),
  [ICE_PELLETS]: dynamic(() => import('./ice-pellets-icon.variant')),
  [LIGHT_FREEZING_RAIN]: dynamic(
    () => import('./light-freezing-rain-icon.variant')
  ),
  [LIGHT_ICE_PELLETS_SHOWERS]: dynamic(
    () => import('./light-ice-pellets-showers-icon.variant')
  ),
  [LIGHT_ICE_PELLETS]: dynamic(
    () => import('./light-ice-pellets-icon.variant')
  ),
  [LIGHT_RAIN_SHOWERS]: dynamic(
    () => import('./light-rain-showers-icon.variant')
  ),
  [LIGHT_RAIN]: dynamic(() => import('./light-rain-icon.variant')),
  [LIGHT_SLEET]: dynamic(() => import('./light-sleet-icon.variant')),
  [LIGHT_SNOW_SHOWERS]: dynamic(
    () => import('./light-snow-showers-icon.variant')
  ),
  [LIGHT_SNOW]: dynamic(() => import('./light-snow-icon.variant')),
  [MIST]: dynamic(() => import('./mist-icon.variant')),
  [MOSTLY_CLOUDY]: dynamic(() => import('./mostly-cloudy-icon.variant')),
  [MOSTLY_SUNNY]: dynamic(() => import('./mostly-sunny-icon.variant')),
  [OVERCAST]: dynamic(() => import('./overcast-icon.variant')),
  [PARTLY_CLOUDY]: dynamic(() => import('./partly-cloudy-icon.variant')),
  [RAIN_SHOWERS]: dynamic(() => import('./rain-showers-icon.variant')),
  [RAIN]: dynamic(() => import('./rain-icon.variant')),
  [SLEET]: dynamic(() => import('./sleet-icon.variant')),
  [SMOKE]: dynamic(() => import('./smoke-icon.variant')),
  [SNOW]: dynamic(() => import('./snow-icon.variant')),
  [SQUALL]: dynamic(() => import('./squall-icon.variant')),
  [SUNNY]: dynamic(() => import('./sunny-icon.variant')),
  [THUNDERSTORM]: dynamic(() => import('./thunderstorm-icon.variant')),
  [VOLCANIC_ASH]: dynamic(() => import('./volcanic-ash-icon.variant')),
  [WATERSPOUT]: dynamic(() => import('./waterspout-icon.variant')),
};

export default variants;
