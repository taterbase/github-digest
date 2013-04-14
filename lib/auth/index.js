var express         = require('express')
  , app             = module.exports = express()
  , passport        = require('passport')
  , GithubStrategy  = require('passport-github').Strategy
  , User            = require('../../models').User
  , config          = require('../../config')
  ;

passport.serializeUser(function(user, done){
  done(null, user._id);
});

passport.deserializeUser(function(_id, done){
  User.findOne({_id: _id}).lean(true).exec(done);
});

passport.use(new GithubStrategy({
    clientID: config.github.client_id
  , clientSecret: config.github.client_secret
  , callbackURL: config.github.callback
  }, function(accessToken, refreshToken, profile, done){
    User.findOne({gid: profile._raw.id}).lean(true).exec(function(err, user){

      if(user)
        return done(user);

      var newUser = new User({
          username: profile._json.login
        , gid: profile._json.id
      })

      newUser.save(function(err){
        done(err, newUser.toObject());
      });

    });
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github', passport.authenticate('github'));

app.get(  '/auth/github/callback'
        , passport.authenticate('github', {failureRedirect: '/login', successRedirect: '/'}));

app.get('/logout', function(req, res){
  req.logout()
  res.redirect('/');
});
