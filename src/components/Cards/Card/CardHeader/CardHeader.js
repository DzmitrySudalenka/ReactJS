import React from 'react';
import {FaEdit, FaSave, FaRegWindowClose} from 'react-icons/fa';
import './CardHeader.css';

const CardHeader = (props) => {

  const {title, editTitle, isView, isChecked, isEdit, editTitleHandler, checkHandler, editHandler,
    saveHandler, cancelHandler} = props;

  let cardTitle = <h3 className="card-title">{title}</h3>;

  let editControl;

  if (!isView) {

    editControl = <FaEdit className="card-control" onClick={editHandler} />;

  }

  let cardControls = <div className="card-controls">
    {editControl}
    <input
      type="checkbox"
      className="card-control"
      checked={isChecked}
      onChange={checkHandler}
    />
  </div>;

  if (isEdit) {

    cardTitle = <input
      className="card-input-title"
      type="text"
      value={editTitle}
      onChange={editTitleHandler}
    />;

    cardControls = <div className="card-controls">
      <FaSave className="card-control" onClick={saveHandler} />
      <FaRegWindowClose className="card-control" onClick={cancelHandler} />
    </div>;

  }

  return (
    <div className="card-title-wrap">
      {cardTitle}
      {cardControls}
    </div>
  );

}

export default CardHeader;
