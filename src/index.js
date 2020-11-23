import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import App from './containers/App';
import cardsReducer from "./store/reducers/cards";
import authReducer from "./store/reducers/auth";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import './index.css';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
}

const rootReducer = combineReducers({
  cards: cardsReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
