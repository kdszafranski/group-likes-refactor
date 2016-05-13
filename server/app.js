var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./public/assets/data');
var bios = require('./routes/routes');
var likes = require('./routes/likes');

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/bios', bios);
app.use('/likes' likes);
app.use('/likes' likes);

app.get('/', function(req, res){
  var file = 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});
app.get('/*', function(req, res) {
  //console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
