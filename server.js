'use strict';

const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      imageRoute = require('./routes/image'),
      mongoose   = require('./mongoose')
      ;

mongoose();

app
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({limit: '50mb', extended: true}))
  .use(express.static('public'))
  .listen(3000, function(){
    console.log("server started on 3000");
  });

app.use("/image", imageRoute);

