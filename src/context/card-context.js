import React, { Component } from 'react';
import axios from 'axios';

const CardContext = React.createContext(undefined);
const { Provider, Consumer } = CardContext;

class CardContextProvider extends Component {
  state = {
    cards: [],
    onlyView: false
  };

  cardsToRemove = [];

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
        this.setState({cards: updatedCards});
      });
  }

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
