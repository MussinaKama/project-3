const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/api/users/unauthorized",
    failureFlash: true
  }),
  function(req, res, next) {
    console.log("sign in successful");
    res.json({
      user: req.user,
      loggedIn: true
    });
  }
);

router.post("/signup", function(req, res, next) {
  db.User.findOne({ email: req.body.email }, function(err, useremail) {
    if (err) throw err;
    if (useremail) {
      return res.json("email is already in use");
    }
    if (!useremail) {
      let newUser = new db.User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      });
      newUser.password = newUser.generateHash(req.body.password);
      newUser.save(function(err) {
        if (err) throw err;
        console.log("user saved!");
        res.redirect(307, "/api/users/login");
      });
    }
  });
});

router.get("/unauthorized", function(req, res, next) {
  res.json({
    error: req.flash("error"),
    message: "user not authenticated"
  });
});

router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
  res.json({
    user: req.user,
    loggedIn: true
  });
});

router.post("/savedtrips", function(req, res) {
  console.log("this is lives in post" + req.user);
  if (req.user) {
    db.User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { trips: req.body } },
      { new: true }
    )
      .then(function(response) {
        console.log(response + "this lives in post");
        res.json(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

router.get("/savedtrips", function(req, res) {
  if (req.user) {
    db.User.find({ _id: req.user._id })
      .then(function(response) {
        console.log(response);
        res.json(response[0].trips);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

router.put("/savedtrips/:id", function(req, res) {
  if (req.user) {
    for (var i = 0; i < req.user.trips.length; i++) {
      if (req.user.trips[i].id == req.params.id) {
        console.log(req.user.trips[i]);
        req.user.trips.splice(i, 1);
      }
    }
    db.User.findByIdAndUpdate({ _id: req.user._id }, { trips: req.user.trips })
      .then(function(response) {
        console.log(response);
        res.json(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
  res.json("User logged out successfully");
});

module.exports = router;
