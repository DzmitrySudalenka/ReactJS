import React from 'react';
import './CardBody.css';

const CardBody = (props) => {

  const {text, editText, isEdit, editTextHandler} = props;

  let cardText = text;

  if (isEdit) {

    cardText = <textarea value={editText} onChange={editTextHandler}/>;

  }

  return <p className="card-text">{cardText}</p>;

}

export default CardBody;
