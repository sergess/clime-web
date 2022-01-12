export type CallAsyncResult<T> = {
  ok: boolean;
  data: T | null;
};

export default CallAsyncResult;
