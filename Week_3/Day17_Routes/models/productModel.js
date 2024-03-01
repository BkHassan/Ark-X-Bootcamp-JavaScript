// * get product

function getproductId(id) {
  let matchingProduct = product;

  if (id) {
    matchingProduct = matchingProduct.filter(
      (product) => product.id === parseInt(id)
    );
  }
  return matchingProduct;
}

//* get product

function getProduct() {
  let filteredProduct = product;

  filteredProduct = filteredProduct.filter(
    (product) =>
      parseInt(product.price) >= miniPrice &&
      parseInt(product.price) <= maxPrice
  );
  if (filteredProduct.length > 0) {
    res.json(filteredProduct);
  } else {
    res
      .status(404)
      .json(`No product found between the ${miniPrice} and ${maxPrice}`);
  }
}

//* post request

function createProduct() {
  const newProduct = {
    id: product.length + 1,
    name: name,
    type: type,
    price: price,
  };
  product.push(newProduct);
  res.status(201).json(newProduct);
}

// * put product id

async function updateProduct() {
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
  } catch (error) {
    console.error(error);
  }
}

//* dellet product id

function deleteProduct() {
  const index = product.findIndex((product) => product.id === parseInt(id));

  if (index === -1) {
    res.status(404).json({
      message: "product didn't found",
    });
  } else {
    // Delete the product from the array
    product.splice(index, 1);
    res.json("the product was delleted");
  }
}

module.exports = {
  getproductId,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
