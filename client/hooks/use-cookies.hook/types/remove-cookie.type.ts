import { CookieAttributes } from 'js-cookie';

export interface IRemoveCookie {
  (name: string, options?: CookieAttributes): void;
}

export default IRemoveCookie;
