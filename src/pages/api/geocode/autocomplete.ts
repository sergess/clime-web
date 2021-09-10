import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'src/services';
import { isString } from 'src/utils';
import {
  withApiV3Service,
  withRequestMethod,
} from 'src/middlewares/api-handler';

const autocompleteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  service: Geocode
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

  const autocompleteSuggestions = await service.queryAutocomplete({
    query: query as string,
    language: language as string,
  });

  return res.status(200).json(autocompleteSuggestions);
};

export default withRequestMethod('GET')(
  withApiV3Service<Geocode>(Geocode)(autocompleteHandler)
);
