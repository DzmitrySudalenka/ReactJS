import React, { useState } from 'react';
import classNames from 'classnames';
import './Card.css';

const Сard = ( props ) => {

  const [cardState, setCardState] = useState({
    isChecked: false
  });

  const changeStyleHandler = (event) => {
    setCardState({
      isChecked: event.target.checked
    });
  };

  return (
    <div className={classNames('card', {dark: cardState.isChecked})}>
      <div className="card-title-wrap">
        <h3 className="card-title">{props.caption}</h3>
        <input type="checkbox" checked={cardState.isChecked} onChange={changeStyleHandler}/>
      </div>
      <hr className="card-sep"/>
      <p className="card-text">{props.children}</p>
    </div>
  )
};

export default Сard;
