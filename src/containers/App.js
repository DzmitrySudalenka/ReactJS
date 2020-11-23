import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink, Route, Switch} from "react-router-dom";
import SignInPage from "../pages/SignIn";
import CardsPage from "../pages/CardsPage";
import CardPage from "../pages/CardPage";
import NotFoundPage from "../pages/NotFoundPage";
import Logout from "../pages/SignIn/Logout/Logout";
import {authCheckState, loadCards} from "../store/actions";
import Settings from "../pages/Settings";
import "./App.css";

class App extends Component {

  componentDidMount() {
    this.props.authCheckState();
    this.props.loadCards();
  }

  render() {

    let welcomeString = '';

    let logoutRoute = null;

    let authLink = <NavLink to="/sign-in" className="main-nav-list-item-link">Sign in</NavLink>;

    let settingsRoute = null;

    if (this.props.user) {

      welcomeString = `Приветствую ${this.props.user}`;

      logoutRoute = <Route path="/logout" component={Logout} />;

      authLink = <NavLink to="/logout" className="main-nav-list-item-link">Выйти</NavLink>;

      if (this.props.isAdmin) {

        settingsRoute = <Route path="/settings" component={Settings} />;

      }

    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-title-wrap">
            <div className="App-header-welcome">{welcomeString}</div>
            <h1 className="App-header-title">ReactJS</h1>
            <div className="cards-counter">{this.props.ctr}</div>
          </div>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li className="main-nav-list-item">
                <NavLink to="/" exact className="main-nav-list-item-link">Home</NavLink>
              </li>
              {this.props.isAdmin &&
                <li className="main-nav-list-item">
                  <NavLink to="/settings" exact className="main-nav-list-item-link">Settings</NavLink>
                </li>
              }
              <li className="main-nav-list-item">
                {authLink}
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={CardsPage} />
            <Route path="/card/:id" component={CardPage} />
            <Route path="/sign-in" component={SignInPage} />
            {logoutRoute}
            {settingsRoute}
            <Route render={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.cards.cards.length,
    user: state.auth.user,
    isAdmin: state.auth.isAdmin
  };
}

const mapDispatchToProps = {
  authCheckState,
  loadCards
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
