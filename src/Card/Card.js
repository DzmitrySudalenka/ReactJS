import React, { useState } from 'react';
import classNames from 'classnames';
import { FaEdit, FaSave, FaRegWindowClose } from 'react-icons/fa';
import './Card.css';

const Card = ({caption, children: text}) => {

  const [isChecked, setIsChecked] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [titleVal, setTitleVal] = useState(caption);

  const [textVal, setTextVal] = useState(text);

  const [editTitleVal, setEditTitleVal] = useState(caption);

  const [editTextVal, setEditTextVal] = useState(text);

  const changeStyleHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  const editHandler = () => {
    setIsEdit(true);
    setIsChecked(false);
  }

  const saveHandler = () => {
    setIsEdit(false);
    setTitleVal(editTitleVal);
    setTextVal(editTextVal);
  }

  const cancelHandler = () => {
    setIsEdit(false);
    setEditTitleVal(titleVal);
    setEditTextVal(textVal);
  }

  const titleHandler = (event) => {
    setEditTitleVal(event.target.value);
  }

  const textHandler = (event) => {
    setEditTextVal(event.target.value);
  }

  let cardTitle = <h3 className="card-title">{titleVal}</h3>;

  let cardControls = <div className="card-controls">
    <FaEdit className="card-control" onClick={editHandler} />
    <input type="checkbox" className="card-control" checked={isChecked} onChange={changeStyleHandler}/>
  </div>;

  let cardText = textVal;

  if (isEdit) {

    cardTitle = <input className="card-input-title" type="text" value={editTitleVal} onChange={titleHandler}/>;

    cardControls = <div className="card-controls">
      <FaSave className="card-control" onClick={saveHandler} />
      <FaRegWindowClose className="card-control" onClick={cancelHandler} />
    </div>;

    cardText = <textarea value={editTextVal} onChange={textHandler}/>;

  }

  return (
    <div className={classNames('card', {dark: isChecked})}>
      <div className="card-title-wrap">
        {cardTitle}
        {cardControls}
      </div>
      <hr className="card-sep"/>
      <p className="card-text">{cardText}</p>
    </div>
  );

};

export default Card;
