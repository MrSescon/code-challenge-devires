import React, {useState, useEffect} from 'react';
import { Form, Title, List } from './components';
import { Container, ListContainer } from './styles';

const TodoList: React.FC = () => {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {

  },[]);

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
