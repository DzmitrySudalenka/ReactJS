import React from 'react';
import Card from "./Card";
import {CardContextConsumer} from "../../context";
import './CardsList.css';

const CardsList = () => {
  return (
    <div className="cards-list">
      <CardContextConsumer>
        {context => context.cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.headerText}
              text={card.bodyText}
              changeContent={(title, text) => context.changeContent(card.id, title, text)}
              removeCard={(state) => context.removeCard(card.id, state)}
            />
          );
        })}
      </CardContextConsumer>
    </div>
  );
}

export default CardsList;
