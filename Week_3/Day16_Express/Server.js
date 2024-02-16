const express = require("express");
const url = require("url");

const app = express();
app.get("/", (req, res, next) => {
  try {
    const parseURL = url.parse(req.url, true);
    const path = parseURL.pathname;

    if (path === "/") {
      res.status(200).send("Welcome to my Express.js server!");
    } else {
      next(); 
    }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });
  
  // Catch-all route for other requests
  app.use((req, res) => {
    res.status(404).send("Not found");
  });
  
  app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
  });