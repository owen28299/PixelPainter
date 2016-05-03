'use strict';

const express = require('express'),
      app     = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose')
      ;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.once('open', function() {
  console.log("database opened");

  var imageSchema = mongoose.Schema({
    name: String,
    imagestate: String
  });

  var Image = mongoose.model('Image', imageSchema);

  app.post("/save", function(req,res){
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

  app.get("/load/:name", function(req,res){
    Image.find( {name: req.params.name}, function(err,images){
      if(err) {
        res.send(err);
      }
      else {
        console.log(images);
        res.send(images[0]);
      }
    });
  });

});


// var image = {};

// app.get("/load/:name", function(req,res){
//   var name = req.params.name;
//   res.send(image[name]);
// });

// app.post("/save", function(req,res){
//   image[req.body.name] = req.body.imagestate;
//   res.send(image);
// });

app.listen(3000, function(){
  console.log("server started on 3000");
});