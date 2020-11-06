import React, {Fragment} from "react";
import CardsList from "../../components/Cards";
import Checkbox from "../../components/Checkbox";
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import {CardContextConsumer} from "../../context";
import "./CardsPage.css";

const CardsPage = () => {
  return (
    <div className="page cards-page">
      <CardContextConsumer>
        {context =>
          <Fragment>
            <div className="cards-page-controls">
              <label className="cards-page-control">
                <Checkbox
                  className="cards-page-control-checkbox-view"
                  checked={context.onlyView}
                  onChange={context.onChange}
                />
                <span className="cards-page-control-text">Только просмотр</span>
              </label>
              <div className="cards-page-control" onClick={context.onAdd}>
                <FaPlus className="cards-page-control-icon cards-page-control-icon-add"/>
                <span className="cards-page-control-text">Создать новую карточку</span>
              </div>
              <div className="cards-page-control" onClick={context.onRemove}>
                <FaRegTrashAlt className="cards-page-control-icon cards-page-control-icon-remove"/>
                <span className="cards-page-control-text">Удалить выбранные карточки</span>
              </div>
            </div>
            <CardsList/>
          </Fragment>
        }
      </CardContextConsumer>
    </div>
  );
}

export default CardsPage;
