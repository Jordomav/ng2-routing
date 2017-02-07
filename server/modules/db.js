const mongoose = require('mongoose'),
  fs = require('fs');

module.exports = {
  start: (models) => {
    // Connect to DB
    mongoose.connect(process.env.MONGO);

    // Loop over each of the files in the modules directory and require each
    fs.readdirSync(models).forEach(function (file) {
      var model = models + file;
      require(model);
    });
  }
};
