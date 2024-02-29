const express = require("express");
const app = express();
const session = require("express-session"); // Import express-session
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const fs = require("fs");
const users = require("./users.json");

const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 },
    rolling: true,
  })
); // Add the express-session middleware here
app.use(passport.initialize());
app.use(passport.session()); // Initialize Passport.js session

// Define Passport local strategy
passport.use(
  new LocalStrategy(
    {
      // * the "username" here, represents req.body.username
      usernameField: "username", // Corrected typo in usernameField
    },
    (username, password, done) => {
      // * username and password are distracted from req.body automatically
      // "done" function is called in the end AS :
      //if everything went well : done(null, username);
      //else : done(err, username);
      const user = users.find((user) => user.username === username);
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const isValidPassword = bcrypt.compare(
        password,
        user.password
      );
      if (!isValidPassword) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    return done(new Error("User not found"));
  }
  return done(null, user.username);
});

// Middleware to protect routes
const isAuthenticated = (req, res, next) => {
  //! req.isAuthenticated(); Returns a boolean
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware
  }
  return res.status(401).json({ message: "Unauthorized" }); // User is not authenticated, return 401 Unauthorized
};

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "Logged in successfully!" });
});

app.post("/register", (req, res) => {
  // Registration logic
  const { username, password } = req.body;
  const salt = bcrypt.genSalt(10);
  let hashedPassword = bcrypt.hashSync(password, salt);
  users.push({ username, password });
  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.status(200).json({
    message: "New user registered successfully!",
    data: {
      username,
      hashedPassword,
    },
  });
});

//* Protected routes

app.get("/profile", isAuthenticated, (req, res) => {
  res.json({ message: `Welcome mr.${req.session.passport.user}` });
});
app.put("/profile/update", isAuthenticated, (req, res) => {
  const loggedUser = req.session.passport.user;
  const { updatedUsername, updatedPassword } = req.body;
  let hashedPassword = bcrypt.hashSync(updatedPassword, 10);
  let userIDX = users.findIndex((user) => user.username === loggedUser);
  users[userIDX] = {
    username: updatedUsername ? updatedUsername : users[userIDX].username,
    password: updatedPassword ? hashedPassword : users[userIDX].password,
  };

  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.status(200).json({
    message: "your profile has been updated!",
    data: users[userIDX],
  });
});

// *logout
app.get("/logout", isAuthenticated, (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.status(200).json({ message: "Logged out successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`The server is listening on`, PORT);
});
