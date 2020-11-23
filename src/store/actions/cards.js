import * as types from "./types";
import axios from "axios";

export const loadCards = () => {
  return dispatch => {
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
        dispatch(setCards(updatedCards));
      });
  }
};

export const setCards = (cards) => ({
  type: types.SET_CARDS, cards
});

export const changeOnlyView = () => ({
  type: types.CHANGE_ONLY_VIEW
});

export const addCard = () => ({
  type: types.ADD_CARD
});

export const cardToRemove = (id, state) => ({
  type: types.CARD_TO_REMOVE, id, state
});

export const changeContent = (id, title, text) => ({
  type: types.CHANGE_CONTENT, id, title, text
});

export const removeCards = () => ({
  type: types.REMOVE_CARDS
});
