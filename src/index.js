import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import reducer from './reducers/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
      <Game />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
