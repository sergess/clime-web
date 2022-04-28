export type RequestJsonResult<T> = {
  ok: boolean;
  data: T | null;
};

export default RequestJsonResult;
