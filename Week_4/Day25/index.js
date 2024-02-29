// Advanced passport challenge
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

const PORT = 3000;
const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30000 },
    rolling: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ! Set Up Google Authentication Strategy:

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "574589543825-d4eh5bf1ufhh20tirulursp97p9nud23.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://127.0.0.1:3000/auth/google/callback",
      passReqToCallback: true,
      scope: ["profile", "email"],
    },
    function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
  // Retrieve user from database using id
  // Call done() with the user object
});

// !Set Up Authentication Routes:
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

// !Protect Routes and Retrieve User Data:
app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.json({ message: `Welcome, ${req.user.displayName}!` });
  }
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
app.listen(PORT, () => {
  console.log(`The server is listening on`, PORT);
});
