import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {CardContextProvider} from "./context";

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById('root')
);
