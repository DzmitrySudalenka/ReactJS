import React, { Component } from 'react';
import classNames from 'classnames';
import './Card.css';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc";

class Card extends Component {

  constructor(props) {

    super(props);

    const {title, children: text} = props;

    this.state = {
      editTitleVal: title,
      editTextVal: text
    };

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isView && this.props.isEdit) {
      this.cancelHandler();
    }
  }

  editTitleHandler = (event) => {
    this.setState({editTitleVal: event.target.value});
  }

  editTextHandler = (event) => {
    this.setState({editTextVal: event.target.value});
  }

  saveHandler = () => {
    this.props.changeContent(this.state.editTitleVal, this.state.editTextVal);
  }

  cancelHandler = () => {
    this.props.editHandler(false);
    this.setState({
      editTitleVal: this.props.title,
      editTextVal: this.props.children
    });
  }

  render() {

    const {title, children: text, isView, isChecked, isEdit, checkHandler, editHandler} = this.props;

    return (
      <div className={classNames('card', {dark: isChecked})}>
        <CardHeader
          title={title}
          editTitle={this.state.editTitleVal}
          isView={isView}
          isChecked={isChecked}
          isEdit={isEdit}
          editTitleHandler={this.editTitleHandler}
          checkHandler={checkHandler}
          editHandler={editHandler}
          saveHandler={this.saveHandler}
          cancelHandler={this.cancelHandler}
        />
        <hr className="card-sep"/>
        <CardBody
          text={text}
          editText={this.state.editTextVal}
          isEdit={isEdit}
          editTextHandler={this.editTextHandler}
        />
      </div>
    );

  }

}

export default withLoadingDelay(Card);
