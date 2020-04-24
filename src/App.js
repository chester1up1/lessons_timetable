import React from 'react';
import Main from './containers/main/Main';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
