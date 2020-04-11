'use strict';

const express = require('express');
const router = express.Router();
const catSchema = require('../lib/models/categories-schema.js');
const Model = require('../lib/models/model.js');

const CatModel = new Model(catSchema);

/**
 * Categories GET route
 * @group Categories
 * @route GET /categories
 * @returns {object} 200 -This route show data from categories object
 */
router.get('/api/v1/products', (req, res, next) => {
  res.send('Hello form the the route')
});

/**
 * Categories GET route
 * @group Categories
 * @route GET /categories
 * @returns {object} 200 -This route show data from categories object
 */

router.get('/api/v1/categories', async(req, res, next) => {
  let results = await CatModel.readByQuery({});
  console.log('results', results)
  res.send(results);
});

/**
 * Categories POST route
 * @group Categories
 * @route POST /categories
 * @returns {object} 200 -This route create data inside categories object
 */

router.post('/api/v1/categories', async(req, res, next) => {
  let record = await CatModel.create(req.body);
  res.send(record);
});

/**
 * Categories PUT route
 * @group Categories
 * @route PUT /categories/:id
 * @returns {object} 200 -This route update data in categories object
 */

router.put('/api/v1/categories/:_id', async (req, res, next) => {
  let record = await CatModel.update(req.params._id);
  res.send(record);
});

/**
 * Categories DELETE route
 * @group Categories
 * @route DELETE /categories/:id
 * @returns {object} 200 -This route delete data in categories object
 */

router.delete('/api/v1/categories/:_id', async (req, res, next) => {
  let record = await CatModel.delete (req.params._id)
});



module.exports = router;