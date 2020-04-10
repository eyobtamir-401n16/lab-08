'use strict';
require('dotenv').config();
const server = require('./lib/server.js');
const port = process.env.PORT || 3000;
const mongodb ='mongodb+srv://Eyob1984:Sourcecode1$@cluster0-rk6f8.mongodb.net/test'

server.start(port, mongodb);