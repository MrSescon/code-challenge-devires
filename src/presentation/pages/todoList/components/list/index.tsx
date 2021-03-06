import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../data/store';
import { getTodos } from '../../../../../data/store/ducks/todo.duck';
import Todo from '../todo';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todoReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  let allTodos = [];

  if (todos.length > 0) {
    allTodos = todos.map((todo) => {
      return <Todo key={todo.id.toString()} todo={todo} />;
    });
  } else if (!loading) {
    allTodos.push(
      <h3 key="acu" id="acu">
        All caught up !
      </h3>
    );
  }

  return (
    <div id="list">
      <p id="info"> Your Todos: </p>
      {loading && <p>Loading...</p>}
      {allTodos}
    </div>
  );
};

export default List;
