import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import {changeContent} from "../../store/actions";
import "./CardPage.css";

const CardPage = (props) => {

  const {cards} = props;

  const [title, setTitle] = useState('');

  const [text, setText] = useState('');

  const [isEdit, setIsEdit] = useState(false);

  const cardId = props.match.params.id;

  useEffect(() => {

    if (cards.length) {

      const cardIndex = cards.findIndex(card => card.id === cardId);

      if (cardIndex >= 0) {

        const card = cards[cardIndex];

        setTitle(card.headerText);

        setText(card.bodyText);

      }

    }

  }, [cards, cardId]);

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function textHandler(event) {
    setText(event.target.value);
  }

  function editHandler() {
    setIsEdit(true);
  }

  function saveHandler() {
    props.changeContent(cardId, title, text);
    setIsEdit(false);
  }

  let cardPageContent = <Loader type="Oval" color="salmon" height={80} className="card-page-loader" />;

  if (cards.length) {

    cardPageContent = <div className="card-page-not-found">Card not found</div>;

    if (title) {

      let cardPageTitle = <h3 className="card-title">{title}</h3>;

      let cardPageText = <p className="card-text">{text}</p>

      let cardPageBtn = <button className="btn" onClick={editHandler}>Редактировать</button>

      if (isEdit) {

        cardPageTitle = <input
          className="card-input card-input-title"
          type="text"
          value={title}
          onChange={titleHandler}
          autoFocus
        />

        cardPageText = <textarea
          className="card-input"
          value={text}
          onChange={textHandler}
        />

        cardPageBtn = <button className="btn" onClick={saveHandler}>Сохранить</button>;

      }

      cardPageContent = <Fragment>
        <h2 className="card-page-title">Card page</h2>
        <div className="card">
          <div className="card-title-wrap">
            {cardPageTitle}
          </div>
          <hr className="card-sep"/>
          {cardPageText}
          {cardPageBtn}
        </div>
      </Fragment>

    }

  }

  return (
    <div className="card-page">
      {cardPageContent}
    </div>
  );

}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = {
  changeContent
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
