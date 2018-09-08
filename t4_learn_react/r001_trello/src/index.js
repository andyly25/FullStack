// testing react with a trello sample
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './index.css';

ReactDOM.render(
  <Board />, //renders Board component
  document.getElementById('root')
);
