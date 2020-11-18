import React from "react";
import CardsList from "../../components/Cards";
import Checkbox from "../../components/UI/Checkbox";
import {connect} from "react-redux";
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {changeOnlyView, addCard, removeCards} from "../../store/actions";
import "./CardsPage.css";

const CardsPage = (props) => {
  return (
    <div className="page cards-page">
      <div className="cards-page-controls">
        <label className="cards-page-control">
          <Checkbox
            className="cards-page-control-checkbox-view"
            checked={props.onlyView}
            onChange={props.changeOnlyView}
          />
          <span className="cards-page-control-text">Только просмотр</span>
        </label>
        <div className="cards-page-control" onClick={props.addCard}>
          <FaPlus className="cards-page-control-icon cards-page-control-icon-add"/>
          <span className="cards-page-control-text">Создать новую карточку</span>
        </div>
        <div className="cards-page-control" onClick={props.removeCards}>
          <FaRegTrashAlt className="cards-page-control-icon cards-page-control-icon-remove"/>
          <span className="cards-page-control-text">Удалить выбранные карточки</span>
        </div>
      </div>
      <CardsList history={props.history} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    onlyView: state.onlyView
  };
}

const mapDispatchToProps = {
  changeOnlyView,
  addCard,
  removeCards
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);
