'use strict';
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerGenerator = require('../docs/swagger.js');
const categoriesRouter = require('../routes/categories.js');
const porductsRouter = require('../routes/products.js');
const notFound = require('../lib/middleware/404.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const startServer = (port, mongodb) => {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(mongodb, options);
  app.listen (port, () => {
    console.log('Server is up and running on port', port)
  })
}

swaggerGenerator(app);
app.use(cors());
app.use(morgan('dev'))

/**
 * Categories GET route
 * @group Categories
 * @route GET /categories
 * @returns {object} 200 -This route show data from categories object
 */
app.get('/', (req, res, next) => {
  res.send('Hello form the the route')
});



app.use('/api/v1', categoriesRouter)
app.use('/api/v1', porductsRouter)
app.use('*', notFound);




module.exports = {
  server: app,
  start:startServer
};