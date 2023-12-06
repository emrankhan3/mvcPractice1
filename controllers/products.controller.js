const products = require("../models/products.model")
const path = require("path");

exports.getProducts = (req, res) => {
  // res.sendFile(path.join(__dirname + "./../views/products.html"));
   res.send('prod')
};

exports.saveProducts = (req, res) => {
  const productName = req.body.productName;
  const price = Number(req.body.price);
  const user = {
    productName,
    price,
  };
  products.push(user);
  res.status(200).json({
    success: true,
    products
  });
    // res.send('success')
};
