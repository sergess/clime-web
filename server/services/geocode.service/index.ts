import BaseApiV3Service from 'server/services/base-api-v3.service';

import {
  LocationDataByCoordinatesArguments,
  LocationData,
  AutocompleteArguments,
  SearchArguments,
} from './types';

export class Geocode extends BaseApiV3Service {
  public async getLocationDataByCoordinates({
    latitude,
    longitude,
    language,
  }: LocationDataByCoordinatesArguments): Promise<LocationData | null> {
    const locationData = await this.callAsync<LocationData>(
      `/geocode/reverse/${language}/${latitude}/${longitude}`
    );

    return locationData;
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/search/${language}/${query}`
    );

    return locationData;
  }

  public async queryAutocomplete({
    query,
    language,
  }: AutocompleteArguments): Promise<LocationData[] | null> {
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/autocomplete/${language}/${query}`
    );

    return locationData;
  }
}

export * from './types';

export default Geocode;
