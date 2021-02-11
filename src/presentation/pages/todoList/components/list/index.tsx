import React from 'react'
import Todo from '../todo'
import { TodoTypes } from '../../../../../data/protocols/todo/todo-types'

const list: React.FC = () => {
  let allTodos = [];
  const todos: TodoTypes[] = [];
  if (todos.length > 0) {
    allTodos = todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  } else {
    allTodos.push(
      <h3 key="1" id="acu">
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

export default list;
