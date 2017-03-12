var express = require('express');
var router = express.Router();

router.post('/addtodo/', function(request, response) {
  var todo = request.body.todo;
  response.contentType('json');
  var respMsg = 'You posted: ' + todo;
  response.send({message: respMsg});
});

module.exports = router;