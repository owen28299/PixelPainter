'use strict';

const express = require('express'),
      router  = express.Router(),
      Image   = require('../models/Image')
      ;

router.route('/save')
  .post(function(req,res){
  var image = new Image({
    name: req.body.name,
    imagestate: req.body.imagestate
  });

  image.save(function(err, data){
    if(err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  });
});

router.route('/load/:name')
  .get(function(req,res){
  Image.find( {name: req.params.name}, function(err,images){
    if(err) {
      res.send(err);
    }
    else {
      res.send(images[images.length - 1]);
    }
  });
});



module.exports = router;