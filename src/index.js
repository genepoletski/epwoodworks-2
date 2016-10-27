//import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

var rootEl = document.getElementById('root');
ReactDOM.render(<Router />, rootEl);
if (module.hot) {
  module.hot.accept('./Router', function () {
    var NextApp = require('./Router');
    ReactDOM.render(<NextApp />, rootEl);
  });
}
