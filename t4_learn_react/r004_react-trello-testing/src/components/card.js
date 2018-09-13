import React from 'react';

import './card.css';

// this is a stateless component
export default function Card(props) {
  return (
    <div className="card">
      {props.text}
    </div>
  );
};

Card.defaultProps = {
  text: ''
};