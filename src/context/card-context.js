import React, { Component } from 'react';

const CardContext = React.createContext(undefined);
const { Provider, Consumer } = CardContext;

class CardContextProvider extends Component {
  state = {
    cards: [
      {id:'id1', headerText: 'Tab number One', bodyText: 'I expect some text here...'},
      {id:'id2', headerText: 'Tab number Two', bodyText: 'I expect some text here...'},
      {id:'id3', headerText: 'Tab number Three', bodyText: 'I expect some text here...'},
      {id:'id4', headerText: 'Tab number Four', bodyText: 'I expect some text here...'},
      {id:'id5', headerText: 'Tab number Five', bodyText: 'I expect some text here...'},
      {id:'id6', headerText: 'Tab number Six', bodyText: 'I expect some text here...'},
      {id:'id7', headerText: 'Tab number Seven', bodyText: 'I expect some text here...'}
    ],
    onlyView: false
  };

  cardsToRemove = [];

  checkBoxAppHandler = () => {
    this.setState({onlyView: !this.state.onlyView});
  };

  addCardHandler = () => {
    let cards = [...this.state.cards];
    let lastCard = cards[cards.length-1];
    let newCard = {
      id: 'id' + (+lastCard.id.slice(2) + 1),
      headerText: 'This is new Card',
      bodyText: 'I expect some text here...'
    };
    cards.push(newCard);
    this.setState({cards: cards});
  };

  cardsToRemoveHandler = (id, state) => {
    if(state) {
      this.cardsToRemove.push(id);
    } else {
      this.cardsToRemove = this.cardsToRemove.filter(val => val!==id);
    }
  };

  removeCardHandler = () => {
    let cards = [...this.state.cards];
    cards = cards.filter(val => !this.cardsToRemove.includes(val.id));
    this.setState({cards: cards});
  };

  render() {
    return (
      <Provider value={{
        onlyView: this.state.onlyView,
        cards: this.state.cards,
        cardsCount: this.state.cards.length,
        onAdd: this.addCardHandler,
        onRemove: this.removeCardHandler,
        removeCard: this.cardsToRemoveHandler,
        onChange: this.checkBoxAppHandler
      }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CardContext, CardContextProvider, Consumer as CardContextConsumer };
