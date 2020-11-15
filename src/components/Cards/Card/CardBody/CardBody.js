import React from 'react';
import './CardBody.css';

const CardBody = (props) => {

  const {text, isEdit, textHandler} = props;

  let cardText = text;

  if (isEdit) {

    cardText = <textarea value={text} onChange={textHandler} className="card-input"/>;

  }

  return <p className="card-text">{cardText}</p>;

}

export default CardBody;
