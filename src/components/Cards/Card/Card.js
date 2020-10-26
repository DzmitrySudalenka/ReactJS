import React, { Component } from 'react';
import classNames from 'classnames';
import './Card.css';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

class Card extends Component {

  constructor(props) {

    super(props);

    const {title, children: text} = props;

    this.state = {
      isEdit: false,
      editTitleVal: title,
      editTextVal: text
    };

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isView && this.state.isEdit) {
      this.cancelHandler();
    }
  }

  editTitleHandler = (event) => {
    this.setState({editTitleVal: event.target.value});
  }

  editTextHandler = (event) => {
    this.setState({editTextVal: event.target.value});
  }

  editHandler = () => {
    this.setState({isEdit: true});
    this.props.uncheckCard();
  }

  saveHandler = () => {
    this.setState({isEdit: false});
    this.props.changeContent(this.state.editTitleVal, this.state.editTextVal);
  }

  cancelHandler = () => {
    this.setState({
      isEdit: false,
      editTitleVal: this.props.title,
      editTextVal: this.props.children
    });
  }

  render() {

    const {title, children: text, isView, isChecked, checkHandler} = this.props;

    return (
      <div className={classNames('card', {dark: isChecked})}>
        <CardHeader
          title={title}
          editTitle={this.state.editTitleVal}
          isView={isView}
          isChecked={isChecked}
          isEdit={this.state.isEdit}
          editTitleHandler={this.editTitleHandler}
          checkHandler={checkHandler}
          editHandler={this.editHandler}
          saveHandler={this.saveHandler}
          cancelHandler={this.cancelHandler}
        />
        <hr className="card-sep"/>
        <CardBody
          text={text}
          editText={this.state.editTextVal}
          isEdit={this.state.isEdit}
          editTextHandler={this.editTextHandler}
        />
      </div>
    );

  }

}

export default Card;
