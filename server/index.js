const express = require('express'),
  api = express.Router(),
  routing = require('./modules/routing'),
  passport = require('passport'),
  mongo = require('./modules/db'),
  passportMiddleware = require('./modules/passport'),
  jwt = require('./modules/jwt');

// Require env file
require('dotenv').config();

api.get('/', (req, res) => {
  res.send('api good to go');
});

// Initialize jwt
api.use(jwt.authCheck());

// Initialize and set up passport
api.use(passport.initialize());
passport.use(passportMiddleware.setup());

// Require all mongoose models
var models = __dirname + '/models/';
mongo.start(models);

var routesPath = __dirname + '/router/';
routing.build(routesPath, api);

module.exports = api;
