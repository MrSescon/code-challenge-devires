import { makeApiUrl } from '../../http/api-url-factory';
import { LoadTodos } from '../../../../domain/usecases/load-todos';
import { RemoteLoadTodos } from '../../../../data/usecases/load-todos/remote-load-todos';
import { makeAxiosHttpClient } from 'main/factories/http';

export const makeRemoteLoadTodos = (): LoadTodos => {
  return new RemoteLoadTodos(makeApiUrl('/todos'), makeAxiosHttpClient());
};
