import { ISetCookie } from './set-cookie.type';
import { IRemoveCookie } from './remove-cookie.type';

export type UseCookiesResponse = {
  cookies: string | (string | undefined)[] | undefined;
  setCookie: ISetCookie;
  removeCookie: IRemoveCookie;
};

export default UseCookiesResponse;
