const express = require('express'),
  path = require('path'),
  http = require('http'),
  bodyParser = require('body-parser'),
  app = express(),
  server = require('./server');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', server);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, () => console.log(`API running on localhost:3000`));
