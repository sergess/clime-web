import { NextApiRequest, NextApiResponse } from 'next';

import { Geocode } from 'server/services';
import { withRequestMethod } from 'server/middlewares/api-handler';

const searchHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { query, language } = req.query;

  const geocodeService = new Geocode({
    userAgentHeader: req.headers['user-agent'],
  });
  const searchSuggestions = await geocodeService.querySearch({
    query: query as string,
    language: language as string,
  });

  if (!searchSuggestions) {
    return res.status(400).end('Bad request');
  }

  return res.status(200).json(searchSuggestions);
};

export default withRequestMethod('GET')(searchHandler);
