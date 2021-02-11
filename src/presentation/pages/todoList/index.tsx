import React from 'react';
import { Form, Title, List } from './components';
import { Container, ListContainer } from './styles';

const TodoList: React.FC = () => {
  return (
    <Container>
      <ListContainer>
        <Title />
        <Form />
        <List />
      </ListContainer>
    </Container>
  );
};

export default TodoList;
