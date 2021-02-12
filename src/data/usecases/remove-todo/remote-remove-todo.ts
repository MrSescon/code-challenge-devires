import { HttpClient, HttpStatusCode } from '../../protocols/http';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { RemoveTodo } from 'domain/usecases/';

export class RemoteRemoveTodo implements RemoveTodo {
  private readonly url: string;
  private readonly httpClient: HttpClient<Record<string, unknown>>;

  constructor(url: string, httpClient: HttpClient<Record<string, unknown>>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async removeTodo(): Promise<Record<string, unknown>> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'delete',
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse;
      default:
        throw new UnexpectedError();
    }
  }
}
