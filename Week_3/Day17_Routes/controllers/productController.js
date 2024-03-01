const Product = require("./models/productModel.js");

// * get product

function getproduct(req, res) {
  const id = req.query.id;
  const type = req.query.type;

}

//* get product by id

function getProductId(req, res) {
  let id = req.params.id;
  
  let prod = Product.getproductId(id);
  res.status(200).json(prod);
}

//* post request
function createProduct(req, res) {
  const { name, type, price } = req.body;
}

// * put product id
async function updateProduct(req, res) {
  const { id } = req.params;
  const updateProduct = req.body;
}

//* dellet product id
function deleteProduct(req, res) {
  const { id } = req.params;
}

module.exports = {
  getproduct,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
