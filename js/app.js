// This file bootstraps the entire application

var App = require('./components/App.react');
var React = require('react');


React.render(
  <App />,
  document.getElementById('react')
);
