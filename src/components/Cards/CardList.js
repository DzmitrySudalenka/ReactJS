import React, {useContext} from 'react';
import Card from "./Card";
import CardsContext from "../../context";

const CardList = () => {

  const cardsContext = useContext(CardsContext);

  return cardsContext.cards.map((card) => {
    return <Card
      key={card.id}
      title={card.title}
      isChecked={card.isChecked}
      isEdit={card.isEdit}
      check={event => cardsContext.check(event, card.id)}
      edit={(event, isEdit = true) => cardsContext.edit(card.id, isEdit)}
      change={(title, text) => cardsContext.change(card.id, title, text)}
      uncheck={() => cardsContext.uncheck(card.id)}
    >
      {card.text}
    </Card>
  });
}

export default CardList;
