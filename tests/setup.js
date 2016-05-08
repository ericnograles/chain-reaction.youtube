var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

// Stubbing sessionStorage, as react-router needs this
global.window.sessionStorage = {
  removeItem: function(key) {
    return true;
  },
  setItem: function(key, value) {
    return true;
  }
};