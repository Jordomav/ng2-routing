const LocalStrategy = require('passport-local');

module.exports = {
  setup: () => {
    return new LocalStrategy(
      {usernameField: 'email', session: false},
      (email, password, finished) => {
        let mongoose = require('mongoose'),
          User = mongoose.model('User'),
          Promise = require('bluebird'),
          compare = Promise.promisify(require('bcrypt').compare);

        User.findOne({email}).then(
          user => {
            if (!user) {
              res.json({
                success: false,
                message: 'User not found'
              });
            }
            compare(password, user.password).then(
              res => {
                if (!res) {
                  res.json({
                    success: false,
                    message: 'Password incorrect'
                  });
                }
                finished(null, user);
              }).catch(finished);
          }).catch(finished);
      });
  }
};
