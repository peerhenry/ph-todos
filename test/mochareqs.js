var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var Chai = require('chai');
var Enzyme = require('enzyme');
var Sinon = require('sinon');
//var Immutable = require('immutable');
var jsdom = require('jsdom');

global.React = React;
global.Redux = Redux;
global.ReactRedux = ReactRedux;
global.Chai = Chai;
global.Enzyme = Enzyme;
global.Sinon = Sinon;
global.jsdom = jsdom;
//global.Immutable = Immutable;


/*var exposedProperties = ['window', 'navigator', 'document']
global.document = jsdom('');
global.window = codument.defaultView;
Object.keys(document.defaultView).forEach(prop => {
  if(typeof global[prop] === 'undefined'){
    exposedProperties.push(prop);
    global[prop] = document.defaultView[prop];
  }
});
global.navigator = {
  userAgent: 'node.js'
};//*/