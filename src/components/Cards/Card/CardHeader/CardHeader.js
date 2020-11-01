import React, {useContext} from 'react';
import CardsContext from "../../../../context";
import {FaEdit, FaSave, FaRegWindowClose} from 'react-icons/fa';
import './CardHeader.css';

const CardHeader = (props) => {

  const {title, editTitle, isChecked, isEdit, editTitleHandler, check, edit, save, cancel} = props;

  const cardsContext = useContext(CardsContext);

  let cardTitle = <h3 className="card-title">{title}</h3>;

  let editControl;

  if (!cardsContext.isView) {
    editControl = <FaEdit className="card-control" onClick={edit} />;
  }

  let cardControls = <div className="card-controls">
    {editControl}
    <input
      type="checkbox"
      className="card-control"
      checked={isChecked}
      onChange={check}
    />
  </div>;

  if (isEdit) {

    cardTitle = <input
      className="card-input-title"
      type="text"
      value={editTitle}
      onChange={editTitleHandler}
      autoFocus
    />;

    cardControls = <div className="card-controls">
      <FaSave className="card-control" onClick={save} />
      <FaRegWindowClose className="card-control" onClick={cancel} />
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
