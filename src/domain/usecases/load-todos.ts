import { TodoModel } from '../models/todo-model';

export interface LoadTodos {
  loadAll: () => Promise<TodoModel[]>;
}
