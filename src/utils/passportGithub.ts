/*const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(_accessToken, _refreshToken, profile, cb) {
    console.log(profile);
    cb(null,profile)
  }
));
*/

/*
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../model/UserModel');
module.exports = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.GITHUB_CALL_BACK_URL
  },
  function(_accessToken, _refreshToken, profile, done) {
    User.findOne({githubId: profile.id }).then((data, _err) => {
      if (!data) return User.create({
        githubId: profile.id,
        fullname: profile.displayName,
        username: profile.username,
        location: profile._json.location,
        phone: profile._json.phone,
        email: profile._json.email,
        profilePhoto: profile._json.avatar_url
      }).then((data, err) => {
        console.log(err);
        return done(null, data);
      });
      else return done(null, data);
    });
  }
);*/
