//Configure Passport.js

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//*Set Up Google Authentication Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "574589543825-d4eh5bf1ufhh20tirulursp97p9nud23.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURl: "http://127.0.0.1:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        done(profile)
    }
  )
);

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    // Access user data using req.user
    res.send(`Welcome, ${req.user.displayName}!`);
  } else {
    res.redirect("/login");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
