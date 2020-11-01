import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import withLoadingDelay from "../../../hoc";
import CardsContext from "../../../context";
import './Card.css';

class Card extends Component {

  constructor(props) {

    super(props);

    const {title, children: text} = props;

    this.state = {
      editTitleVal: title,
      editTextVal: text
    };

  }

  static contextType = CardsContext;

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.context.isView && this.props.isEdit) {
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
    this.props.change(this.state.editTitleVal, this.state.editTextVal);
  }

  cancelHandler = () => {
    this.props.edit(null, false);
    this.setState({
      editTitleVal: this.props.title,
      editTextVal: this.props.children
    });
  }

  render() {

    const {title, children: text, isChecked, isEdit, check, edit} = this.props;

    return (
      <div className={classNames('card', {dark: isChecked})}>
        <CardHeader
          title={title}
          editTitle={this.state.editTitleVal}
          isChecked={isChecked}
          isEdit={isEdit}
          editTitleHandler={this.editTitleHandler}
          check={check}
          edit={edit}
          save={this.saveHandler}
          cancel={this.cancelHandler}
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

Card.propTypes = {
  change: PropTypes.func,
  check: PropTypes.func,
  children: PropTypes.string,
  edit: PropTypes.func,
  isChecked: PropTypes.bool,
  isEdit: PropTypes.bool,
  title: PropTypes.string,
  uncheck: PropTypes.func
}

export default withLoadingDelay(Card);
