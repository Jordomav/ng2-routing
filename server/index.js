const express = require('express'),
  api = express.Router(),
  routing = require('./modules/routing');

api.get('/', (req, res) => {
  res.send('api good to go');
});

var routesPath = __dirname + '/router/';
routing.build(routesPath, api);

module.exports = api;
