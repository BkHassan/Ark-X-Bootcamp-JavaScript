const express = require("express");
const app = express();
const postRouter = require("./routers/postRoute");

app.use(express.json());

app.use("/", postRouter);

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
