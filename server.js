'use strict';

const express = require('express'),
      app     = express(),
      bodyParser = require('body-parser')
      ;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('public'));

var image = {};

app.get("/load", function(req,res){
  res.send(image);
});

app.post("/save", function(req,res){
  image = req.body;
  res.send("success: true");
});

app.listen(3000, function(){
  console.log("server started on 3000");
});