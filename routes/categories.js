'use strict';

const express = require('express');
const router = express.Router();
const catSchema = require('../lib/models/categories-schema.js');
const Model = require('../lib/models/model.js');

const CatModel = new Model(catSchema);
router.get('/', (req, res, next) => {
  res.send('Hello form the the route')
});

router.get('/', async(req, res, next) => {
  let results = await CatModel.readByQuery({});
  console.log('results', results)
  res.send(results)
})

router.post('/categories', async(req, res, next) => {
  let record = await CatModel.create(req.body);
  res.send(record)
})



module.exports = router;