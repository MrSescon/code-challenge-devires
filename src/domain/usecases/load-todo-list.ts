export type LoadTodoListModel = {
  id: number;
  title: string;
  description: string;
};

export interface LoadTodoList {
  loadAll: () => Promise<LoadTodoListModel[]>;
}
