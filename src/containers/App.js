import React, {Component, Fragment} from 'react';
import Checkbox from "../components/Checkbox";
import CardList from "../components/Cards";
import {CardContextConsumer} from "../context";
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardContextConsumer>
          {context =>
            <Fragment>
              <header className="App-header">
                <h1 className="App-header-title">ReactJS header</h1>
                <div className="cards-counter">{context.cardsCount}</div>
              </header>
              <div className="app-controls">
                <label className="app-control">
                  <Checkbox
                    className="app-control-checkbox-view"
                    checked={context.onlyView}
                    onChange={context.onChange}
                  />
                  <span className="app-control-text">Только просмотр</span>
                </label>
                <div className="app-control" onClick={context.onAdd}>
                  <FaPlus className="app-control-icon app-control-icon-add"/>
                  <span className="app-control-text">Создать новую карточку</span>
                </div>
                <div className="app-control" onClick={context.onRemove}>
                  <FaRegTrashAlt className="app-control-icon app-control-icon-remove"/>
                  <span className="app-control-text">Удалить выбранные карточки</span>
                </div>
              </div>
              <main className="App-content">
                <CardList/>
              </main>
            </Fragment>
          }
        </CardContextConsumer>
      </div>
    );
  }
}

export default App;
