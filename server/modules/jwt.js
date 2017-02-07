const jwt = require('jsonwebtoken'),
  unless = require('express-unless'),
  nonProtectedRoutes = [
    // Add any routes that you don't want to check for a token
    '/',
    '/userLogin',
    '/postUser',
  ];

module.exports = {
  authCheck: () => {
    var jwtAuth = (req, res, next) => {
      // check the request for a token in either the body or query
      var token = req.body.token || req.query.token;

      if(token) {
        // Verify that the token used is valid
        jwt.verify(token, process.env.JSONSECRET, function(err, decoded) {
          if (err) {
            // If it is not valid send do not continue the request
            return res.json({ success: false, message: 'Failed to authenticate token.' });
          } else {
            // If it is valid continue with the request
            req.decoded = decoded;
            next();
          }
        });

      } else {
        // If there is no token provided do not continue the request
        return res.status(403).send({
          success: false,
          message: 'No token provided.'
        });
      }
    };

    // Set up unless module
    jwtAuth.unless = unless;

    // Run jwt on all routes except the ones in the array above
    return jwtAuth.unless({path: nonProtectedRoutes});
  }
};
