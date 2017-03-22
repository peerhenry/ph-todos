import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

var req = require.context("../src", true, /.+\.test\.js$/ig);
req.keys().forEach(req);