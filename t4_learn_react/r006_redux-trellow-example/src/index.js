import React from 'react';
import ReactDOM from 'react-dom';
//  this passes the redux store down to any components that request access to it
import {Provider} from 'react-redux';
import Board from './components/board';
import store from './store';
import './index.css';

ReactDOM.render(
  // root component wrapped in Provider and store passed as a prop
  // components can now access parts of store using connect method
  <Provider store={store}>
      <Board />
  </Provider>,
  document.getElementById('root')
);
