'use strict';

const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/image');

var db = mongoose.connection;
db.once('open', function() {
  console.log("database opened");
});

var imageSchema = mongoose.Schema({
  name: String,
  imagestate: String
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;