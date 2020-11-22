import React from "react";
import Card from "./Card";
import {connect} from "react-redux";
import {changeContent, cardToRemove} from "../../store/actions";
import "./CardsList.css";

const CardsList = (props) => {
  return (
    <div className="cards-list">
      {props.cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.headerText}
            text={card.bodyText}
            changeContent={(title, text) => props.changeContent(card.id, title, text)}
            cardToRemove={(state) => props.cardToRemove(card.id, state)}
            goCardPage={() => props.history.push('/card/' + card.id)}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards
  };
}

const mapDispatchToProps = {
  changeContent,
  cardToRemove
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
