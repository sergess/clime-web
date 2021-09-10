import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { isString } from 'server/utils';
import {
  withApiV3Service,
  withRequestMethod,
} from 'server/middlewares/api-handler';

const searchHandler = async (
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

  const searchSuggestions = await service.querySearch({
    query: query as string,
    language: language as string,
  });

  return res.status(200).json(searchSuggestions);
};

export default withRequestMethod('GET')(
  withApiV3Service<Geocode>(Geocode)(searchHandler)
);
