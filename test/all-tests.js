var req = require.context("../src", true, /.+\.test\.js$/ig);
req.keys().forEach(req);