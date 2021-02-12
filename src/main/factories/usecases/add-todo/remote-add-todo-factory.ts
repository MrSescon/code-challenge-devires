import { makeApiUrl } from '../../http/api-url-factory';
import { AddTodo } from '../../../../domain/usecases/add-todo';
import { RemoteAddTodo } from '../../../../data/usecases/add-todo/remote-add-todo';
import { makeAxiosHttpClient } from 'main/factories/http';

export const makeRemoteAddTodo = (): AddTodo =>
  new RemoteAddTodo(makeApiUrl('/todos'), makeAxiosHttpClient());
