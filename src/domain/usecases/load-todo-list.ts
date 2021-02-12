import { TodoModel } from '../models/todo-model';
export interface LoadTodoList {
  loadAll: () => Promise<TodoModel[]>;
}
