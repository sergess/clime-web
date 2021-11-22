export type LocationDataFromApi = {
  airZoneId: number;
  forecastZoneId: number;
  nowcastZoneId: number;
  pollenZoneId: number;
  warningZoneId: number;
  latitude: number;
  longitude: number;
  district: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  countryCode: string | null;
  timeZone: string | null;
  slug: string;
};

export default LocationDataFromApi;
