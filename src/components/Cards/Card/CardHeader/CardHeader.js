import React, {Fragment} from 'react';
import {FaEdit, FaSave, FaRegWindowClose} from 'react-icons/fa';
import './CardHeader.css';
import {connect} from "react-redux";

const CardHeader = (props) => {

  const {title, isEdit, isChecked, titleHandler, onCheck, onEdit, onSave, onCancel} = props;

  let cardTitle = <h3 className="card-title">{title}</h3>;

  let editControl;

  if (!props.onlyView) {
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
      className="card-input card-input-title"
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

const mapStateToProps = state => {
  return {
    onlyView: state.cards.onlyView
  };
}

export {CardHeader, mapStateToProps};
export default connect(mapStateToProps)(CardHeader);
