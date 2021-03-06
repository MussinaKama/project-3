const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require('connect-flash');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash());
app.use(express.static("public"));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trip-plannerdb", { useNewUrlParser: true }, function(err) {
  if (err) throw err;
  console.log("connected");
  app.listen(PORT, (err)=> {
      if (err) throw err;
      console.log(`connected on port ${PORT}`)
  });
});
