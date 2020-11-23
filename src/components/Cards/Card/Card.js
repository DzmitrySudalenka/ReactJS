import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc";
import {connect} from "react-redux";
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.onlyView && this.state.isEdit) {
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
    this.props.cardToRemove(!this.state.isChecked);
  }

  saveHandler = () => {
    this.setState({isEdit: false});
    this.props.changeContent(this.state.title, this.state.text);
  }

  cancelHandler = () => {
    this.setState({
      isEdit: false,
      title: this.props.title,
      text: this.props.text
    });
  }

  goCardPage = () => {
    if (!this.state.isEdit) {
      this.props.goCardPage();
    }
  }

  render() {
    return (
      <div
        className={classNames('card', {dark: this.state.isChecked})}
        onDoubleClick={this.goCardPage}
      >
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

const mapStateToProps = state => {
  return {
    onlyView: state.cards.onlyView
  };
}

export default connect(mapStateToProps)(withLoadingDelay(Card));
