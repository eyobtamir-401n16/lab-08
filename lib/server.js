'use strict';
const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const swaggerGenerator = require('../docs/swagger.js')
const categoriesRouter = require('../routes/categories.js');

const app = express();
swaggerGenerator(app);
app.use(cors());
app.use(morgan('dev'))



app.use('/', categoriesRouter)


const startServer = (port) => {
  app.listen (port, () => {
    console.log('Server is up and running on port', port)
  })
}

module.exports = {
  server: app,
  start:startServer
};