import { HttpClient, HttpStatusCode } from '../../protocols/http';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { LoadTodoList } from 'domain/usecases/load-todo-list';
import { TodoModel } from '../../../domain/models/todo-model';

export class RemoteLoadTodoList implements LoadTodoList {
  private readonly url: string;
  private readonly httpClient: HttpClient<TodoModel[]>;

  constructor(url: string, httpClient: HttpClient<TodoModel[]>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async loadAll(): Promise<TodoModel[]> {
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
