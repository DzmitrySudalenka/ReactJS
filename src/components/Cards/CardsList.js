import React from "react";
import Card from "./Card";
import {connect} from "react-redux";
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
            removeCard={(state) => props.removeCard(card.id, state)}
            goCardPage={() => props.history.push('/card/' + card.id)}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeContent: (id, title, text) => dispatch({type: 'CHANGE_CONTENT', id: id, title: title, text: text}),
    removeCard: (id, state) => dispatch({type: 'CARD_TO_REMOVE', id: id, state: state})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
