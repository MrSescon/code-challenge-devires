import { makeApiUrl } from '../../http/api-url-factory';
import { RemoveTodoList } from '../../../../domain/usecases/remove-todo-list';
import { RemoteRemoveTodoList } from '../../../../data/usecases/remove-todo-list/remote-remove-todo-list';
import { makeAxiosHttpClient } from 'main/factories/http';

export const makeRemoteRemoveTodoList = (id: string): RemoveTodoList =>
  new RemoteRemoveTodoList(makeApiUrl(`/todos/${id}`), makeAxiosHttpClient());
