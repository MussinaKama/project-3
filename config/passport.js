const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy({
    usernameField: "email"
},
    function(email, password, done) {
        db.User.findOne({
            email: email
        }, function(err, user) {
            if (err) {
                console.log(err);
                return done(err)
            }
            if (!user) {
                return done(null, false, {message: "No user found"});
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, {message: "incorrect password"});
            } else {
                return done(null, user)
            }
        });
    }
  ));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = passport;