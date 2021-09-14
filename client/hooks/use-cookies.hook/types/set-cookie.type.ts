import { CookieAttributes } from 'js-cookie';

export interface ISetCookie {
  (
    name: string,
    value: string | { [key: string]: any },
    options?: CookieAttributes
  ): void;
}

export default ISetCookie;
