import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink, Route, Switch} from "react-router-dom";
import SignInPage from "../pages/SignIn";
import CardsPage from "../pages/CardsPage";
import CardPage from "../pages/CardPage";
import NotFoundPage from "../pages/NotFoundPage";
import axios from "axios";
import "./App.css";

class App extends Component {

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(response => {
        const cards = response.data.slice(0, 15);
        const updatedCards = cards.map(card => {
          return {
            id: card.Number,
            headerText: card.Name,
            bodyText: card.About
          }
        });
        this.props.loadCards(updatedCards);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-title-wrap">
            <h1 className="App-header-title">ReactJS</h1>
            <div className="cards-counter">{this.props.ctr}</div>
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
            <Route path="/card/:id" component={CardPage} />
            <Route render={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.cards.length
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadCards: (cards) => dispatch({type: 'LOAD_CARDS', cards: cards})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
