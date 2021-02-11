import React from 'react';
import { TodoWrapper, RemoveBtn } from './styles';
import { TodoTypes } from '../../../../../data/protocols/todo/todo-types';

type PropTypes = {
  todo: TodoTypes;
};

const handleOnClick = () => {};

const todo: React.FC<PropTypes> = ({ todo }: PropTypes) => {
  return (
    <TodoWrapper>
      {todo.value}
      <RemoveBtn onClick={handleOnClick}> x </RemoveBtn>
    </TodoWrapper>
  );
};

export default todo;
