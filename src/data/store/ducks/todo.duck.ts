import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { makeRemoteLoadTodos } from '../../../main/factories/usecases/load-todos/remote-load-todos-factory';
import { makeRemoteRemoveTodo } from '../../../main/factories/usecases/remove-todo/remote-remove-todo-factory';
import { makeRemoteAddTodo } from '../../../main/factories/usecases/add-todo/remote-add-todo-factory';
import { RootState } from '../../store';
import { TodoModel } from '../../../domain/models/todo-model';
import { AddTodoModel } from '../../../domain/models/add-todo-model';

interface State {
  loading: boolean;
  error: string | null;
  todos: TodoModel[];
}

const INITIAL_STATE: State = {
  loading: false,
  error: null,
  todos: [],
};

const toDoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state: State, { payload }: PayloadAction<boolean>) => ({
      ...state,
      loading: payload,
    }),
    setError: (state: State, { payload }: PayloadAction<string | null>) => ({
      ...state,
      error: payload,
    }),
    setTodos: (state: State, { payload }: PayloadAction<TodoModel[]>) => ({
      ...state,
      todos: payload,
    }),
  },
});

export const { setLoading, setError, setTodos } = toDoSlice.actions;

export default toDoSlice.reducer;

const loadList = (dispatch: Dispatch) => {
  makeRemoteLoadTodos()
    .loadAll()
    .then((todo) => {
      dispatch(setError(null));
      dispatch(setTodos(todo));
      dispatch(setLoading(false));
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};

export const getTodos = () => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  dispatch(setLoading(true));
  loadList(dispatch);
};
export const addTodo = (todo: AddTodoModel) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  dispatch(setLoading(true));
  makeRemoteAddTodo()
    .addTodo(todo)
    .then(() => {
      loadList(dispatch);
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};
export const removeTodo = (id: number) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  dispatch(setLoading(true));
  makeRemoteRemoveTodo(id.toString())
    .removeTodo()
    .then(() => {
      loadList(dispatch);
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};

export const selectTodos = (state: RootState) => state.todoReducer;
