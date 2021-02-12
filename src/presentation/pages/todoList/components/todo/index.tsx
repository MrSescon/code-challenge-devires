import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TodoWrapper, RemoveBtn } from './styles';
import { TodoModel } from '../../../../../domain/models/todo-model';
import { removeTodo } from '../../../../../data/store/ducks/todo.duck';

type PropTypes = {
  todo: TodoModel;
};

const Todo: React.FC<PropTypes> = ({ todo }: PropTypes) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <TodoWrapper>
      <strong>${todo.title}</strong> - ${todo.description}
      <RemoveBtn onClick={() => handleDeleteTodo(todo.id)}> x </RemoveBtn>
    </TodoWrapper>
  );
};

export default Todo;
