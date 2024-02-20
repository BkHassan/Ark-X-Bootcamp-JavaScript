const express = require("express");
const app = express();
app.use(express.json());
const product = require("../../data.json");
const fs = require("fs/promises");


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
//  the details of a specific product identified by its ID.
// app.get("/product", (req, res) => {
//   const id = req.query.id;
//   const type = req.query.type;

//   let matchingProduct = product;

//   if (id) {
//     matchingProduct = matchingProduct.filter(
//       (product) => product.id === parseInt(id)
//     );
//   } else if (type) {
//     matchingProduct = matchingProduct.filter(
//       (product) => product.type === type
//     );
//   }
//   if (matchingProduct.length > 0) {
//     res.json(matchingProduct);
//   } else {
//     res.status(404).json(`No product found with the id ${id}`);
//   }
// }),

// * get product Id
// app.get("/search", (req, res) => {
//   const miniPrice = req.query.miniPrice;
//   const maxPrice = req.query.maxPrice;

//   let filteredProduct = product;

//   filteredProduct = filteredProduct.filter(
//     (product) => parseInt(product.price) >= miniPrice && parseInt(product.price) <= maxPrice
//     );
//   if (filteredProduct.length > 0) {
//     res.json(filteredProduct);
//   } else {
//     res
//     .status(404)
//     .json(`No product found between the ${miniPrice} and ${maxPrice}`);
//   }
// });

//* post request

// app.post("/product", (req, res) => {
//   const { name, type, price } = req.body;
//   const newProduct = {
//     id: product.length + 1,
//     name: name,
//     type: type,
//     price: price,
//   };
//   product.push(newProduct);
//   res.status(201).json(newProduct);
// });

// * put product id

app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const updateProduct = req.body;

  const index = product.findIndex((product) => product.id === parseInt(id));

  if (index === -1) {
    res.status(404).json({
      message: " product not found",
    });
  } else {
    product[index] = { ...product[index], ...updateProduct };
    res.status(200).json({
      message: "update successfully",
    });
    console.log(product[index]);
  }
  try {
    await fs.writeFile("./data.json", JSON.stringify(product));
    console.log("File updated successfully");
    // console.log("File path:", "./data.json");
    // console.log("Product data:", product);
  } catch (error) {
    console.error(error);
  }
});

// middleWare

//* dellet product id

// app.delete("/product/:id", (req, res) => {
//   const { id } = req.params;

//   const index = product.findIndex((product) => product.id === parseInt(id));

//   if (index === -1) {
//     res.status(404).json({
//       message: "product didn't found",
//     });
//   } else {
//     // Delete the product from the array
//     product.splice( index, 1);
//     res.json("the product was delleted");
//   }
// });

app.listen(3000, () => {
  console.log(`server is runningon port ${3000}`);
});
