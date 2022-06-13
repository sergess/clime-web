import isEmpty from 'ramda/src/isEmpty';

import { LocationData } from 'common/types';
import { isLocationValid, isString } from 'common/utils';

import ApiV3Service from 'server/services/api-v3.service';

import {
  SlugLanguageArguments,
  LocationDataByCoordinatesArguments,
  AutocompleteArguments,
  SearchArguments,
  LocationParents,
  LocationTree,
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
      console.error(
        `[Geocode.getLocationDataByCoordinates]: location data is empty`,
        {
          ok,
          locationData,
          location,
          language,
        }
      );

      return null;
    }

    return locationData;
  }

  public async getLocationDataBySlug({
    slug,
    language,
  }: SlugLanguageArguments): Promise<LocationData | null> {
    if (!isString(slug) || !isString(language)) {
      console.error(`[Geocode.getLocationDataBySlug]: slug is missing`, {
        slug,
        language,
      });

      return null;
    }

    const { ok, data: locationData } = await this.callAsync<LocationData>(
      `/geocode/lookup/${language}/${slug}`
    );

    if (!ok || isEmpty(locationData)) {
      console.error(`[Geocode.getLocationDataBySlug]: location data is empty`, {
        ok,
        locationData,
        slug,
        language,
      });

      return null;
    }

    return locationData;
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    if (!isString(query) || !isString(language) || query.length < 2) {
      console.error(`[Geocode.querySearch]: problem with query`, {
        query,
        language,
      });

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
      console.error(`[Geocode.queryAutocomplete]: problem with query`, {
        query,
        language,
      });

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

  public async getLocationTree({
    slug,
    language,
  }: SlugLanguageArguments): Promise<LocationTree | null> {
    if (!isString(slug) || !isString(language)) {
      console.error(`[Geocode.getLocationTree]: slug is missing`, {
        slug,
        language,
      });

      return null;
    }

    const { data } = await this.callAsync<LocationTree>(
      `/geocode/children/${language}${slug ? `/${slug}` : ''}`
    );

    return data;
  }

  public async getLocationParentsBySlug({
    slug,
    language,
  }: SlugLanguageArguments): Promise<LocationParents | null> {
    if (!isString(slug) || !isString(language)) {
      console.error(`[Geocode.getLocationParentsBySlug]: slug is missing`, {
        slug,
        language,
      });

      return null;
    }

    const { data } = await this.callAsync<LocationParents>(
      `/geocode/parent/${language}/${slug}`
    );

    return data;
  }
}

export default Geocode;
