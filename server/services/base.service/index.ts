export class Base {
  protected baseUrl: string | undefined = process.env.API_BASE_URL;

  protected async callAsync<T>(
    uri: string,
    init?: RequestInit
  ): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${uri}`, init);
      const body = await response.json();

      return body;
    } catch (e) {
      console.error(e);

      return null;
    }
  }
}

export default Base;
