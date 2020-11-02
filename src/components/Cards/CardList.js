import React from 'react';
import Card from "./Card";
import {CardContextConsumer} from "../../context";

const CardList = () => {
  return (
    <CardContextConsumer>
      {context => context.cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.headerText}
            text={card.bodyText}
            removeCard={(state) => context.removeCard(card.id, state)}
          />
        );
      })}
    </CardContextConsumer>
  );
}

export default CardList;
