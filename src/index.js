// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (!root) throw new Error('missing root');

ReactDOM.render(<App />, root);
registerServiceWorker();
