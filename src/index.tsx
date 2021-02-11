import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './data/store';
import App from './app/App';
import GlobalStyle from './presentation/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
