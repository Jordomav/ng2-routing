module.exports = (api) => {
  api.get('/new', (req, res) => {
    res.send('routing good');
  })
};
