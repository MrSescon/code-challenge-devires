import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../data/store';
import { getTodos } from '../../../../../data/store/ducks/todo.duck';
import Todo from '../todo';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todoReducer);

  useEffect(() => {
    dispatch(getTodos());
  },[]);

  let allTodos = [];

  if (todos.length > 0) {
    allTodos = todos.map((todo) => {
      return <Todo key={todo.id.toString()} todo={todo} />;
    });
  } else {
    allTodos.push(
      <h3 key="acu" id="acu">
        All caught up !
      </h3>
    );
  }

  return (
    <div id="list">
      <p id="info"> Your Todos: </p>
      {allTodos}
    </div>
  );
};

export default List;
