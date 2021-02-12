import { makeApiUrl } from '../../http/api-url-factory';
import { RemoveTodo } from '../../../../domain/usecases/remove-todo';
import { RemoteRemoveTodo } from '../../../../data/usecases/remove-todo/remote-remove-todo';
import { makeAxiosHttpClient } from 'main/factories/http';

export const makeRemoteRemoveTodo = (id: string): RemoveTodo =>
  new RemoteRemoveTodo(makeApiUrl(`/todos/${id}`), makeAxiosHttpClient());
