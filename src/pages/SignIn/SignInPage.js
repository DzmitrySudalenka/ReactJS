import React, {Component} from "react";
import Input from "../../components/UI/Input";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {auth} from "../../store/actions";
import "./SignInPage.css";

class SignInPage extends Component {

  state = {
    form: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          isPassword: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  }

  checkValidity(value, rules) {

    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isPassword) {
      const pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;

  }

  inputChangedHandler = (event, inputIdentifier) => {

    const updatedForm = {
      ...this.state.form
    };

    const updatedFormElement = {
      ...updatedForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({form: updatedForm, formIsValid: formIsValid});

  }

  signInHandler = (event) => {
    event.preventDefault();
    this.props.auth(this.state.form.email.value, this.state.form.password.value);
  }

  render () {

    const formElementsArray = [];

    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key]
      });
    }

    const form = (
      <form onSubmit={this.signInHandler} className="sign-in-page-form">
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <button disabled={!this.state.formIsValid} className="btn">Войти</button>
      </form>
    );

    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }

    return (
      <div className="sign-in-page">
        {authRedirect}
        <div className="card sign-in-page-form-wrap">
          <h2 className="sign-in-page-form-title">Sign in</h2>
          <hr className="card-sep"/>
          {form}
        </div>
      </div>
    );

  }

}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user !== null
  };
};

const mapDispatchToProps = {
  auth
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
