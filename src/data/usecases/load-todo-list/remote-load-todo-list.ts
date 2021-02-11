import { HttpClient, HttpStatusCode } from '../../protocols/http';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { LoadTodoList, LoadTodoListModel } from 'domain/usecases/load-todo-list';

export class RemoteLoadTodoList implements LoadTodoList {
  private readonly url: string;
  private readonly httpClient: HttpClient<LoadTodoListModel[]>;

  constructor(url: string, httpClient: HttpClient<LoadTodoListModel[]>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async loadAll(): Promise<LoadTodoListModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    });
    const todos = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return todos;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}
