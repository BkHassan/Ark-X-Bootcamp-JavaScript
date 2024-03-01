const express = require("express");
const app = express();
app.use(express.json());
const product = require("../../data.json");
const fs = require("fs/promises");
const controller = require("./controllers/productController.js");

//* middleWare

app.use((req, res, next) => {
  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url,
  };

  try {
    console.log(logData);
  } catch (error) {
    console.log("Error in logging ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  next();
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({ message: err.message });
});

//* get product
app.get("/product", controller.getproduct);

// * get product Id
app.get("/search/:id", controller.getProductId);

//* post request
app.post("/product", controller.createProduct);

// * put product id
app.put("/product/:id", controller.updateProduct);

//* dellet product id
app.delete("/product/:id", controller.deleteProduct);

app.listen(3000, () => {
  console.log(`server is runningon port ${3000}`);
});
