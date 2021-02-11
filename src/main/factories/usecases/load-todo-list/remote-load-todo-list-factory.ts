import { makeApiUrl } from '../../http/api-url-factory';
import { LoadTodoList } from '../../../../domain/usecases/load-todo-list';
import { RemoteLoadTodoList } from '../../../../data/usecases/load-todo-list/remote-load-todo-list';
import { makeAxiosHttpClient } from 'main/factories/http';

export const makeRemoteLoadTodoList = (): LoadTodoList => {
  console.log(makeApiUrl('/todos'));
  return new RemoteLoadTodoList(makeApiUrl('/todos'), makeAxiosHttpClient());
};
