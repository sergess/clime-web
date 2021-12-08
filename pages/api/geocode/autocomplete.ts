import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

const autocompleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { query, language } = req.query;

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
  });
  const autocompleteSuggestions = await geocodeService.queryAutocomplete({
    query: query as string,
    language: language as string,
  });

  if (!autocompleteSuggestions) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(autocompleteSuggestions);
};

export default withRequestMethod('GET')(autocompleteHandler);
