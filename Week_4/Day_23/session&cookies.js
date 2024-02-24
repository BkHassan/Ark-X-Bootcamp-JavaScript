const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const uuid = require("uuid");

const app = express();

// Server Variable Structure
const users = [
  {
    id: 1,
    username: "alice",
    password: "hashed_password",
  },
];

app.use(express.json());

app.use(
  session({
    secret: "myKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({ message: " missing username or password" });
  }

  const user = users.find((user) => user.username === username);

  if (user) {
    if (user.password === password) {
      req.session.userId = user.id;
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});

function checkSession(req, res, next) {
  if (!req.session.userId) {
    res.status(401).json({ message: "unauthorized" });
  }
  next();
}

app.get("/profile", checkSession, (req, res) => {
  if (req.session.userId) {
    res.status(200).json({
      message: "Welcome to your profile!",
      id: req.session.userId,
    });
  }
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
