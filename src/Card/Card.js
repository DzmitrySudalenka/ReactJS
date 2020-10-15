import React, { useState } from 'react';

import './Card.css';

const Сard = ( props ) => {

  const [cardState, setCardState] = useState({
    isStyleChanged: false
  });

  const changeStyleHandler = (event) => {
    setCardState({
      isStyleChanged: event.target.checked
    });
  };

  return (
    <div className={`card ${cardState.isStyleChanged ? 'dark' : ''}`}>
      <div className="card-title-wrap">
        <h3 className="card-title">{props.caption}</h3>
        <input type="checkbox" onChange={changeStyleHandler}/>
      </div>
      <hr className="card-sep"/>
      <p className="card-text">{props.children}</p>
    </div>
  )
};

export default Сard;
