// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (!root) throw new Error('missing root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root,
);
registerServiceWorker();
