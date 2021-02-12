export interface RemoveTodoList {
  removeTodo: () => Promise<Record<string, unknown>>;
}
