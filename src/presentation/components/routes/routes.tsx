import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../../pages/landing';
import TodoList from '../../pages/todoList'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/todoList" exact component={TodoList} />
    </BrowserRouter>
  );
};
export default routes;
