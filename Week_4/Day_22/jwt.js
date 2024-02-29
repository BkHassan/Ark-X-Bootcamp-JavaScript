const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const sanitizeHtml = require("sanitize-html");
const users = require("./data.json");


// * send responses in json format
app.use(express.json());

// * user input validation
app.post(
  "/login",
  body("username").isLength({ min: 5, max: 10 }).trim().escape(),
  body("password").isLength({ min: 8 }).trim(),
  (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ message: error.array() });
      return;
    }
    // *authentication
    const user = users.find((user) => user.username == req.body.username);
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "the user didn't found" });
    }
    if (user.password != req.body.password) {
      res.status(400).json({ message: "the password is incorect" });
    }
    // * sanitization
    const sanitizedUSER = {
      username: sanitizeHtml(user.username),
    };
    // * generate token
    const token = jwt.sign(sanitizedUSER, "secret", {
      expiresIn: "1800s",
    });
    res.json({ message: "login successful", token: token });
  }
);

app.listen(3000, () => {
  console.log("the server is running in port 3000");
});
