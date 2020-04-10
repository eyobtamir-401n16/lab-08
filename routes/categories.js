'use strict';

const express = require('express');
const router = express.Router();
const catSchema = require('../lib/models/categories-schema.js');
const Model = require('../lib/models/model.js');

const CatModel = new Model(catSchema);
router.get('/', (req, res, next) => {
  res.send('Hello form the the route')
});


module.exports = router;