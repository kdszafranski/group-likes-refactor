var express = require('express');
var router = express.Router();
var brandonLikes = 0;
var sionLikes = 0;
var chavoLikes = 0;
var quinnLikes = 0;

router.post('/Brandon', function(req, res){
  brandonLikes++;
  res.send('' + brandonLikes);
});
router.post('/Sion', function(req, res){
  sionLikes++;
  res.send('' + sionLikes);
});
router.post('/Chavo', function(req, res){
  chavoLikes++;
  res.send('' + chavoLikes);
});
router.post('/Quinn', function(req, res){
  quinnLikes++;
  res.send('' + quinnLikes);
});

router.get('/data', function(req, res){
  var likeArray = [sionLikes, chavoLikes, brandonLikes, quinnLikes];
  console.log('likeArray ran', likeArray);
  res.send(likeArray);
});

module.exports = router;
