import { Page } from 'client/types';

import { useUrlSlug } from '../use-url-slug.hook';

export const usePageUrl = (page: Page): string => {
  const urlSlug = useUrlSlug();

  return urlSlug ? `/${page}/${urlSlug}` : '/';
};

export default usePageUrl;
