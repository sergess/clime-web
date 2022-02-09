import isEmpty from 'ramda/src/isEmpty';

import { LocationData } from 'common/types';
import { isLocationValid, isString } from 'common/utils';

import ApiV3Service from 'server/services/api-v3.service';

import {
  LocationDataBySlugArguments,
  LocationDataByCoordinatesArguments,
  AutocompleteArguments,
  SearchArguments,
} from './types';

/**
 * Geocoding service.
 * @see https://confluence.jabodo.com:8443/pages/viewpage.action?pageId=91099149
 */
export class Geocode extends ApiV3Service {
  public async getLocationDataByCoordinates({
    location,
    language,
  }: LocationDataByCoordinatesArguments): Promise<LocationData | null> {
    if (!isLocationValid(location) || !isString(language)) {
      return null;
    }

    const { ok, data: locationData } = await this.callAsync<LocationData>(
      `/geocode/reverse/${language}/${location?.latitude}/${location?.longitude}`
    );

    if (!ok || isEmpty(locationData)) {
      return null;
    }

    return locationData;
  }

  public async getLocationDataBySlug({
    slug,
    language,
  }: LocationDataBySlugArguments): Promise<LocationData | null> {
    if (!isString(slug) || !isString(language)) {
      return null;
    }

    const { ok, data: locationData } = await this.callAsync<LocationData>(
      `/geocode/lookup/${language}/${slug}`
    );

    if (!ok || isEmpty(locationData)) {
      return null;
    }

    return locationData;
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    if (!isString(query) || !isString(language) || query.length < 2) {
      return null;
    }

    // [TODO] Think about better way how it could be done
    const { ok, data: locationData } = await this.callAsync<LocationData[]>(
      `/geocode/search/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    if (!ok) {
      return null;
    }

    return locationData;
  }

  public async queryAutocomplete({
    query,
    language,
  }: AutocompleteArguments): Promise<LocationData[] | null> {
    if (!isString(query) || !isString(language) || query.length < 2) {
      return null;
    }

    // [TODO] Think about better way how it could be done
    const { ok, data: locationData } = await this.callAsync<LocationData[]>(
      `/geocode/autocomplete/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    if (!ok) {
      return null;
    }

    return locationData;
  }
}

export default Geocode;
