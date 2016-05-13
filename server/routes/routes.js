var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //console.log('data ran', data);
  res.send(data);
});

module.exports = router;
