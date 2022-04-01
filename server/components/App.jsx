const React = require('react');
const ReactDOM = require('react-dom');
const SSR = require('./SSR.jsx');

ReactDOM.hydrate(<SSR />, document.getElementById('react'));
