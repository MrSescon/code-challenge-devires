import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { makeRemoteLoadTodoList } from '../../../main/factories/usecases/load-todo-list/remote-load-todo-list-factory';
import { makeRemoteRemoveTodoList } from '../../../main/factories/usecases/remove-todo-list/remote-remove-todo-factory';
import { RootState } from '../../store';
import { TodoModel } from '../../../domain/models/todo-model';

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

export const getTodos = () => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  dispatch(setLoading(true));
  makeRemoteLoadTodoList()
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
export const removeTodo = (id: number) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const state = getState();
  dispatch(setLoading(true));
  makeRemoteRemoveTodoList(id.toString())
    .removeTodo()
    .then(() => {
      makeRemoteLoadTodoList()
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
    })
    .catch((err: Error) => {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    });
};

/** Seletor de estado do store já tipado */
export const selectTodos = (state: RootState) => state.todoReducer;
