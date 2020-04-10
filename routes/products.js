'use strict';

const express = require('express');
const router = express.Router();
const proSchema = require('../lib/models/products-schema.js');
const Model = require('../lib/models/model.js');

const ProModel = new Model(proSchema);

router.get('/', async (req, res, next) => {
  let results = await ProModel.readByQuery({});
  res.send(results)
});

router.get('', async (req, res, next) => {
  let record = await ProModel.readByQuery(req.param._id);
  res.send(record);
});

module.exports = router;