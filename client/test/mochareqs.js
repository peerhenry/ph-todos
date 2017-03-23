var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var Immutable = require('immutable');
var Axios = require('axios');

var Chai = require('chai');
var Enzyme = require('enzyme');
var Sinon = require('sinon');
var jsdom = require('jsdom');

global.React = React;
global.Redux = Redux;
global.ReactRedux = ReactRedux;
global.Immutable = Immutable;
global.Axios = Axios;

global.Chai = Chai;
global.Enzyme = Enzyme;
global.Sinon = Sinon;
global.jsdom = jsdom;