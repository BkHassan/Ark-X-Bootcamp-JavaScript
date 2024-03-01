const express = require("express");
const app = express();
const postRouter = require("./routers/postRoute");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blogdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.json());

app.use("/", postRouter);

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
