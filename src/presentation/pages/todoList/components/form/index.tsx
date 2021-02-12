import { addTodo } from 'data/store/ducks/todo.duck';
import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormContainer } from './styles';

// type PropTypes = {
//   addTodo(): void;
// }

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleNewTodo = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer>
      <input
        value={title}
        placeholder="Add Title here..."
        autoComplete="off"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        value={description}
        placeholder="Add description here..."
        autoComplete="off"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleNewTodo}> + </button>
    </FormContainer>
  );
};

export default Form;
