import { TodoModel } from '../models/todo-model';
import { AddTodoModel } from '../models/add-todo-model';

export interface AddTodo {
  addTodo: (params: AddTodoModel) => Promise<TodoModel>;
}
