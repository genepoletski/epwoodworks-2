import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

var rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
if (module.hot) {
  module.hot.accept('./App', function () {
    var NextApp = require('./App');
    ReactDOM.render(<NextApp />, rootEl);
  });
}
