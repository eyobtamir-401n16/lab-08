'use strict';

const express = require('express');
const router = express.Router();
const proSchema = require('../lib/models/products-schema.js');
const Model = require('../lib/models/model.js');

const ProModel = new Model(proSchema);
console.log('PorModel', ProModel)

router.get('/', async (req, res, next) => {
  let results = await ProModel.readByQuery({});
  res.send(results)
});

router.get('/:_id', async (req, res, next) => {
  let record = await ProModel.read(req.params._id);
  res.send(record);
});

router.post('/', async (req, res, next) => {
  let record = await ProModel.create(req.body)

  res.send(record)
})
 
module.exports = router;