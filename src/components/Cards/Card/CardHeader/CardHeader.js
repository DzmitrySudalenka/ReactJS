import React, {Fragment, useContext} from 'react';
import {CardContext} from "../../../../context";
import {FaEdit, FaSave, FaRegWindowClose} from 'react-icons/fa';
import './CardHeader.css';

const CardHeader = (props) => {

  const {title, isEdit, isChecked, titleHandler, onCheck, onEdit, onSave, onCancel} = props;

  const cardContext = useContext(CardContext);

  let cardTitle = <h3 className="card-title">{title}</h3>;

  let editControl;

  if (!cardContext.onlyView) {
    editControl = <FaEdit className="card-control" onClick={onEdit} />;
  }

  let cardControls = <Fragment>
    {editControl}
    <input
      type="checkbox"
      className="card-control"
      checked={isChecked}
      onChange={onCheck}
    />
  </Fragment>;

  if (isEdit) {

    cardTitle = <input
      className="card-input-title"
      type="text"
      value={title}
      onChange={titleHandler}
      autoFocus
    />;

    cardControls = <Fragment>
      <FaSave className="card-control" onClick={onSave} />
      <FaRegWindowClose className="card-control" onClick={onCancel} />
    </Fragment>;

  }

  return (
    <div className="card-title-wrap">
      {cardTitle}
      <div className="card-controls">
        {cardControls}
      </div>
    </div>
  );

}

export default CardHeader;
