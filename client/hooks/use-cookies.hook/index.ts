import Cookies from 'js-cookie';

import { isString } from 'common/utils';

import { UseCookiesResponse, ISetCookie } from './types';

export const useCookies = (
  dependencies: string | string[]
): UseCookiesResponse => {
  const cookies = isString(dependencies)
    ? Cookies.get(dependencies as string)
    : (dependencies as string[]).map((dependency) => Cookies.get(dependency));

  const setCookie: ISetCookie = (name, value, options) => {
    const valueToSet = isString(value) ? value : JSON.stringify(value);

    Cookies.set(name, valueToSet, {
      expires: 365,
      sameSite: 'Strict',
      secure: true,
      ...options,
    });
  };

  return { cookies, setCookie, removeCookie: Cookies.remove };
};

export default useCookies;
