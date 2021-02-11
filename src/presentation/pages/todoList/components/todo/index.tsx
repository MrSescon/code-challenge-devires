import React from 'react';
import { TodoWrapper, RemoveBtn } from './styles';
import { LoadTodoListModel } from '../../../../../domain/usecases/load-todo-list';

type PropTypes = {
  todo: LoadTodoListModel;
};

const handleOnClick = () => {};

const todo: React.FC<PropTypes> = ({ todo }: PropTypes) => {
  return (
    <TodoWrapper>
      {`${todo.title} - ${todo.description}`}
      <RemoveBtn onClick={handleOnClick}> x </RemoveBtn>
    </TodoWrapper>
  );
};

export default todo;
