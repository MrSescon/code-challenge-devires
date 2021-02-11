import React from 'react'
import { Form } from './styles'

// type PropTypes = {
//   addTodo(): void;
// }

const form: React.FC = () => {
  const handleChange = () => {};

  const handleNewTodoAddition = () => {};

  return (
    <Form>
      <input
        value={''}
        placeholder="Add todos here..."
        autoComplete="off"
        onChange={handleChange}
      />
      <button onClick={handleNewTodoAddition}> + </button>
    </Form>
  );
};

export default form;
