import { LocationData } from 'common/types';
import { isString } from 'common/utils';

import BaseApiV3Service from 'server/services/base-api-v3.service';

import {
  LocationDataBySlugArguments,
  LocationDataByCoordinatesArguments,
  AutocompleteArguments,
  SearchArguments,
} from './types';

// [TODO] Handle errors properly. In some cases API returns [] in others { ok: false }
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

  public async getLocationDataBySlug({
    slug,
    language,
  }: LocationDataBySlugArguments): Promise<LocationData | null> {
    if (!isString(slug) || !isString(language)) {
      return null;
    }

    const locationData = await this.callAsync<LocationData>(
      `/geocode/lookup/${language}/${slug}`
    );

    return Array.isArray(locationData) ? null : locationData;
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    // [TODO] Think about better way how it could be done
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/search/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    return locationData;
  }

  public async queryAutocomplete({
    query,
    language,
  }: AutocompleteArguments): Promise<LocationData[] | null> {
    // [TODO] Think about better way how it could be done
    const locationData = await this.callAsync<LocationData[]>(
      `/geocode/autocomplete/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    return locationData;
  }
}

export * from './types';

export default Geocode;
