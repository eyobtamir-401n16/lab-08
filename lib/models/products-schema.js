'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: {type: 'string', required: true},
  region: {type: 'string', required: true},
  capitalCity:{type: 'string', required: true}
})

const model = mongoose.model('products', Schema);

module.exports = model;