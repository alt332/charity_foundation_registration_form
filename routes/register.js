var User = require('../models/user');

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.render('form');
    })
    .post(function(req, res) {
      if (req.body.name) {
        User.create(req.body, function(err) {
          if (!err) {
            res.status(500);
            return res.send('Server Error!');
          } else {
            return res.redirect('/success');
          }
        });
      } else {
        return res.redirect('/');
      }
    });
  app.get('/success', function(req, res) {
    res.render('success');
  });
};
