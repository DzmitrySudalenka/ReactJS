import * as types from "./types";

export const loadCards = (cards) => ({
  type: types.LOAD_CARDS, cards
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
