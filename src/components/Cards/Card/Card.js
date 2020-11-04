import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc";
import {CardContext} from "../../../context";
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    const {title, text} = props;
    this.state = {
      isEdit: false,
      isChecked: false,
      title: title,
      text: text
    };
  }

  static contextType = CardContext;

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.context.onlyView && this.state.isEdit) {
      this.cancelHandler();
    }
  }

  titleHandler = (event) => {
    this.setState({title: event.target.value});
  }

  textHandler = (event) => {
    this.setState({text: event.target.value});
  }

  editHandler = () => {
    this.setState({isEdit: true, isChecked: false});
  }

  checkHandler = () => {
    this.setState({isChecked: !this.state.isChecked});
    this.props.removeCard(!this.state.isChecked);
  }

  saveHandler = () => {
    this.setState({isEdit: false});
  }

  cancelHandler = () => {
    this.setState({
      isEdit: false,
      title: this.props.title,
      text: this.props.text
    });
  }

  render() {

    return (
      <div className={classNames('card', {dark: this.state.isChecked})}>
        <CardHeader
          title={this.state.title}
          isEdit={this.state.isEdit}
          isChecked={this.state.isChecked}
          titleHandler={this.titleHandler}
          onEdit={this.editHandler}
          onCheck={this.checkHandler}
          onSave={this.saveHandler}
          onCancel={this.cancelHandler}
        />
        <hr className="card-sep"/>
        <CardBody
          text={this.state.text}
          isEdit={this.state.isEdit}
          textHandler={this.textHandler}
        />
      </div>
    );

  }

}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  removeCard: PropTypes.func
}

export default withLoadingDelay(Card);
