import React from 'react';
import Card from "./Card";

const CardList = (props) => props.cards.map((card) => {
  return <Card
    key={card.id}
    title={card.title}
    isView={props.isView}
    isChecked={card.isChecked}
    isEdit={card.isEdit}
    checkHandler={event => props.checkHandler(event, card.id)}
    editHandler={(isEdit = true) => props.editHandler(card.id, isEdit)}
    changeContent={(title, text) => props.changeContent(card.id, title, text)}
    uncheckCard={() => props.uncheckCard(card.id)}
  >
    {card.text}
  </Card>
});

export default CardList;
