import React, {Component} from 'react';
import Checkbox from "../components/Checkbox";
import CardList from "../components/Cards";
import { v4 as uuidv4 } from 'uuid';
import CardsContext from "../context";
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import './App.css';

class App extends Component {

  static contextType = CardsContext;

  state = {
    isView: false,
    cards: this.context.cards,
    cardsCounter: 0,
  };

  componentDidMount() {
    this.countCards();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.cardsCounter !== this.state.cards.length) {
      this.countCards();
    }
  }

  viewHandler = (event) => {
    this.setState({isView: event.target.checked});
  }

  checkHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = event.target.checked;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  editHandler = (id, isEdit) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = false;
    card.isEdit = isEdit;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  addHandler = () => {
    const newCard = {
      id: uuidv4(),
      title: "",
      text: "",
      isChecked: false,
      isEdit: true
    };
    const cards = [newCard, ...this.state.cards];
    this.setState({cards: cards});
  }

  deleteHandler = () => {
    const cards = this.state.cards.filter(card => !card.isChecked);
    this.setState({cards: cards});
  }

  changeContent = (id, title, text) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.title = title;
    card.text = text;
    card.isEdit = false;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  uncheckCard = (id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = false;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  countCards = () => {
    this.setState({cardsCounter: this.state.cards.length});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-title">ReactJS header</h1>
          <div className="cards-counter">{this.state.cardsCounter}</div>
        </header>
        <div className="app-controls">
          <label className="app-control">
            <Checkbox
              className="app-control-checkbox-view"
              checked={this.state.isView}
              onChange={this.viewHandler}
            />
            <span className="app-control-text">Только просмотр</span>
          </label>
          <div className="app-control" onClick={this.addHandler}>
            <FaPlus className="app-control-icon app-control-icon-add"/>
            <span className="app-control-text">Создать новую карточку</span>
          </div>
          <div className="app-control" onClick={this.deleteHandler}>
            <FaRegTrashAlt className="app-control-icon app-control-icon-remove"/>
            <span className="app-control-text">Удалить выбранные карточки</span>
          </div>
        </div>
        <main className="App-content">
          <CardsContext.Provider value={{
            cards: this.state.cards,
            isView: this.state.isView,
            check: this.checkHandler,
            edit: this.editHandler,
            change: this.changeContent,
            uncheck: this.uncheckCard
          }}>
            <CardList/>
          </CardsContext.Provider>
        </main>
      </div>
    );

  }

}

export default App;
