/* eslint-disable */
// Arquivo de exemplo e ajuda sem tipagens e interfaces
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store';

const INITIAL_STATE: any = {
  data: { message: '' },
  loading: false,
  error: undefined,
};

const toDoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    setInitialToDos: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
    addToDo: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
    editToDo: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
    removeToDo: (state, { payload }: PayloadAction<any | undefined>) => ({
      ...state,
      data: payload,
    }),
  },
});

export const { 
  setInitialToDos, 
  addToDo, 
  editToDo, 
  removeToDo 
} = toDoSlice.actions;

export default toDoSlice.reducer;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getInitialToDos = (values: any) => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const s = getState();
  const r = await axios.get<any>('/example');
  dispatch(setInitialToDos({ message: r }));
};

/** Seletor de estado do store já tipado */
// export const selectExampleState = (state: RootState) => state.exampleReducer;
