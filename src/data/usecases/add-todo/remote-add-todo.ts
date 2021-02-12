import { HttpClient, HttpStatusCode } from '../../protocols/http';
import { UnexpectedError } from '../../../domain/errors/unexpected-error';
import { AddTodo } from 'domain/usecases/';
import { TodoModel } from '../../../domain/models/todo-model';
import { AddTodoModel } from '../../../domain/models/add-todo-model';

export class RemoteAddTodo implements AddTodo {
  private readonly url: string;
  private readonly httpClient: HttpClient<TodoModel>;

  constructor(url: string, httpClient: HttpClient<TodoModel>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async addTodo(params: AddTodoModel): Promise<TodoModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });
    const remoteAddTodo = httpResponse.body || {
      id: 0,
      title: '',
      description: '',
    };
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return remoteAddTodo;
      default:
        throw new UnexpectedError();
    }
  }
}
