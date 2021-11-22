import { NextApiRequest, NextApiResponse } from 'next';
import isNil from 'ramda/src/isNil';

import { isString } from 'common/utils';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';
import { getExactLocationFromCookies } from 'server/utils';

const autocompleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { query, language } = req.query;

  if (
    !query ||
    !language ||
    !isString(query) ||
    !isString(language) ||
    query.length < 2
  ) {
    return res.status(400).end('Bad request');
  }

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
    locationFromCookies: getExactLocationFromCookies(req.cookies),
  });
  const autocompleteSuggestions = await geocodeService.queryAutocomplete({
    query: query as string,
    language: language as string,
  });

  if (isNil(autocompleteSuggestions) || 'error' in autocompleteSuggestions) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(autocompleteSuggestions);
};

export default withRequestMethod('GET')(autocompleteHandler);
