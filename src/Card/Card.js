import React from 'react';

import './Card.css';

const Сard = ( props ) => {
  return (
    <div className="card">
      <h3 className="card-title">{props.caption}</h3>
      <hr className="card-sep"/>
      <p className="card-text">{props.children}</p>
    </div>
  )
};

export default Сard;
