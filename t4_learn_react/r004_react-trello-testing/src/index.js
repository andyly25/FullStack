import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './index.css';

ReactDOM.render(
  // Board here is the main component
  <Board />,
  // we are esentially manipulating the html within 'root'
  document.getElementById('root')
);
