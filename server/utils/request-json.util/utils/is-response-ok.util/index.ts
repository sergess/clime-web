import { isObject } from 'server/utils/is-object.util';
import { isBoolean } from 'server/utils/is-boolean.util';

export const isResponseOk = (response: unknown): boolean => {
  if (isObject(response)) {
    const objectResponse = response as Record<string, unknown>;

    if ('ok' in objectResponse && isBoolean(objectResponse?.ok)) {
      return Boolean(objectResponse?.ok);
    }
  }

  return true;
};

export default isResponseOk;
