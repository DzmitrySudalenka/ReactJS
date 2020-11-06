import React, {Component, Fragment} from "react";
import {CardContextConsumer} from "../context";
import SignInPage from "../pages/SignIn";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import CardsPage from "../pages/CardsPage";
import NotFoundPage from "../pages/NotFoundPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CardContextConsumer>
            {context =>
              <Fragment>
                <header className="App-header">
                  <div className="App-header-title-wrap">
                    <h1 className="App-header-title">ReactJS header</h1>
                    <div className="cards-counter">{context.cardsCount}</div>
                  </div>
                  <nav className="main-nav">
                    <ul className="main-nav-list">
                      <li className="main-nav-list-item">
                        <NavLink to="/" exact className="main-nav-list-item-link">Home</NavLink>
                      </li>
                      <li className="main-nav-list-item">
                        <NavLink to="/sign-in" className="main-nav-list-item-link">Sign in</NavLink>
                      </li>
                    </ul>
                  </nav>
                </header>
                <main className="App-content">
                  <Switch>
                    <Route path="/" exact component={CardsPage} />
                    <Route path="/sign-in" component={SignInPage} />
                    <Route render={NotFoundPage} />
                  </Switch>
                </main>
              </Fragment>
            }
          </CardContextConsumer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
