'use strict';

const mongoose   = require('mongoose');

var imageSchema = mongoose.Schema({
  name: String,
  imagestate: String
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;