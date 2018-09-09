// testing react with a trello sample
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import './index.css';

ReactDOM.render(
  <Game />, //renders Board component
  document.getElementById('root')
);
