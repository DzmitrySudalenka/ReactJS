import React from "react";
import "./SignInPage.css";

const SignInPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="page sign-in-page">
      <form onSubmit={handleSubmit} className="card sign-in-page-form">
        <h2 className="sign-in-page-form-title">Sign in</h2>
        <hr className="card-sep"/>
        <input type="text" name="username" placeholder="Username" className="sign-in-page-form-input"/>
        <input type="password" name="password" placeholder="Password" className="sign-in-page-form-input"/>
        <button className="sign-in-page-form-btn">Войти</button>
      </form>
    </div>
  );
}

export default SignInPage;
