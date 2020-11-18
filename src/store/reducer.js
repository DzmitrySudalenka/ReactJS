import * as actionTypes from './types';

const initialState = {
  cards: [],
  onlyView: false,
  cardsToRemove: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CARDS:
      return {
        ...state,
        cards: action.cards
      }
    case actionTypes.CHANGE_ONLY_VIEW:
      return {
        ...state,
        onlyView: !state.onlyView
      }
    case actionTypes.ADD_CARD:
      let cards = [...state.cards];
      let lastCard = cards[cards.length-1];
      let newCard = {
        id: 'id' + (+lastCard.id.slice(2) + 1),
        headerText: 'This is new Card',
        bodyText: 'I expect some text here...'
      };
      cards.push(newCard);
      return {
        ...state,
        cards: cards
      }
    case actionTypes.CARD_TO_REMOVE:
      let cardsToRemove = [...state.cardsToRemove];
      if(action.state) {
        cardsToRemove.push(action.id);
      } else {
        cardsToRemove = cardsToRemove.filter(val => val!==action.id);
      }
      return {
        ...state,
        cardsToRemove: cardsToRemove
      }
    case actionTypes.CHANGE_CONTENT:
      const cardIndex = state.cards.findIndex(card => card.id === action.id);
      const card = {...state.cards[cardIndex]};
      card.headerText = action.title;
      card.bodyText = action.text;
      const cardsChangeContent = [...state.cards];
      cardsChangeContent[cardIndex] = card;
      return {
        ...state,
        cards: cardsChangeContent
      }
    case actionTypes.REMOVE_CARDS:
      let cardsRemove = [...state.cards];
      cardsRemove = cardsRemove.filter(val => !state.cardsToRemove.includes(val.id));
      return {
        ...state,
        cards: cardsRemove
      }
    default:
      return state;
  }
}

export default reducer;
