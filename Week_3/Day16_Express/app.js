const express = require("express");
const app = express();
const postRouter = require("./routers/postRoute");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://hassanboukatena:mongodb204@cluster0.59ij0dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());

//* Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// *middleware that log method and path to console
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/", postRouter);

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
