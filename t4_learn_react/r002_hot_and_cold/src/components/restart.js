import React from 'react';

export default function Restart (props) {
  return (
    <div className="child">
      <button onClick={() => props.onRestart()}>Restart Game</button>
    </div>
  );
}