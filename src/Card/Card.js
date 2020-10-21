import React, { Component } from 'react';
import classNames from 'classnames';
import { FaEdit, FaSave, FaRegWindowClose } from 'react-icons/fa';
import './Card.css';

class Card extends Component {

  constructor(props) {

    super(props);

    const {caption, children: text} = props;

    this.state = {
      isChecked: false,
      isEdit: false,
      titleVal: caption,
      textVal: text,
      editTitleVal: caption,
      editTextVal: text,
    };

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isView && this.state.isEdit) {
      this.cancelHandler();
    }
  }

  changeStyleHandler = (event) => {
    this.setState({isChecked: event.target.checked});
  };

  editHandler = () => {
    this.setState({
      isChecked: false,
      isEdit: true
    });
  }

  saveHandler = () => {
    this.setState({
      isEdit: false,
      titleVal: this.state.editTitleVal,
      textVal: this.state.editTextVal
    });
  }

  cancelHandler = () => {
    this.setState({
      isEdit: false,
      editTitleVal: this.state.titleVal,
      editTextVal: this.state.textVal
    });
  }

  titleHandler = (event) => {
    this.setState({
      editTitleVal: event.target.value
    });
  }

  textHandler = (event) => {
    this.setState({
      editTextVal: event.target.value
    });
  }

  render() {

    const {isView} = this.props;

    let cardTitle = <h3 className="card-title">{this.state.titleVal}</h3>;

    let editControl;

    if (!isView) {

      editControl = <FaEdit className="card-control" onClick={this.editHandler} />;

    }

    let cardControls = <div className="card-controls">
      {editControl}
      <input
        type="checkbox"
        className="card-control"
        checked={this.state.isChecked}
        onChange={this.changeStyleHandler}
      />
    </div>;

    let cardText = this.state.textVal;

    if (this.state.isEdit && !isView) {

      cardTitle = <input
        className="card-input-title"
        type="text"
        value={this.state.editTitleVal}
        onChange={this.titleHandler}
      />;

      cardControls = <div className="card-controls">
        <FaSave className="card-control" onClick={this.saveHandler} />
        <FaRegWindowClose className="card-control" onClick={this.cancelHandler} />
      </div>;

      cardText = <textarea value={this.state.editTextVal} onChange={this.textHandler}/>;

    }

    return (
      <div className={classNames('card', {dark: this.state.isChecked})}>
        <div className="card-title-wrap">
          {cardTitle}
          {cardControls}
        </div>
        <hr className="card-sep"/>
        <p className="card-text">{cardText}</p>
      </div>
    );

  }

}

export default Card;
