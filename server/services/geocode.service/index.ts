import { Location, LocationData } from 'common/types';
import { isString } from 'common/utils';

import BaseApiV3Service from 'server/services/base-api-v3.service';
import { LocationDataFromApi } from 'server/types';
import { isLocationACloseToLocationB } from 'server/utils';

import {
  LocationDataBySlugArguments,
  LocationDataByCoordinatesArguments,
  AutocompleteArguments,
  SearchArguments,
  GeocodeServiceParams,
} from './types';
import { mapLocationData } from './utils';

// [TODO] refactor this class, probably we need to add class-transformer
export class Geocode extends BaseApiV3Service {
  // [TODO] Find a better way how exact location could be calculated
  private locationFromCookies: Location;

  constructor({ userAgentHeader, locationFromCookies }: GeocodeServiceParams) {
    super({ userAgentHeader });

    this.locationFromCookies = locationFromCookies;
  }

  public async getLocationDataByCoordinates({
    latitude,
    longitude,
    language,
  }: LocationDataByCoordinatesArguments): Promise<LocationData | null> {
    const locationData = await this.callAsync<LocationDataFromApi>(
      `/geocode/reverse/${language}/${latitude}/${longitude}`
    );

    if (!locationData) return null;

    const exact = isLocationACloseToLocationB(
      {
        latitude: locationData.latitude,
        longitude: locationData.longitude,
      },
      this.locationFromCookies
    );

    return mapLocationData(locationData, exact);
  }

  public async getLocationDataBySlug({
    slug,
    language,
  }: LocationDataBySlugArguments): Promise<LocationData | null> {
    if (!isString(slug) || !isString(language)) {
      return null;
    }

    const locationData = await this.callAsync<LocationDataFromApi>(
      `/geocode/lookup/${language}/${slug}`
    );

    if (!locationData) return null;

    const exact = isLocationACloseToLocationB(
      {
        latitude: locationData.latitude,
        longitude: locationData.longitude,
      },
      this.locationFromCookies
    );

    return Array.isArray(locationData)
      ? null
      : mapLocationData(locationData, exact);
  }

  public async querySearch({
    query,
    language,
  }: SearchArguments): Promise<LocationData[] | null> {
    // [TODO] Think about better way how it could be done
    const locationDataItems = await this.callAsync<LocationDataFromApi[]>(
      `/geocode/search/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    if (!locationDataItems) return null;

    return locationDataItems.map((locationData) =>
      mapLocationData(locationData)
    );
  }

  public async queryAutocomplete({
    query,
    language,
  }: AutocompleteArguments): Promise<LocationData[] | null> {
    // [TODO] Think about better way how it could be done
    const locationDataItems = await this.callAsync<LocationDataFromApi[]>(
      `/geocode/autocomplete/${language}/${encodeURI(query).replace(
        /[!'()*#]/g,
        escape
      )}`
    );

    if (!locationDataItems) return null;

    return locationDataItems.map((locationData) =>
      mapLocationData(locationData)
    );
  }
}

export * from './types';

export default Geocode;
