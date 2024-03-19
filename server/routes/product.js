const express = require("express");
const {
  addProduct,
  removeProduct,
  popularinwomen,
  newCollection,
  allProducts,
} = require("../controllers/product");

const Router = express.Router();

Router.post("/addproduct", addProduct);

// Creating API For deleting Products

Router.post("/removeproduct", removeProduct);

Router.get("/newcollections", newCollection);

// creating endpoint for popular in women section
Router.get("/popularinwomen", popularinwomen);

Router.get("/allproducts", allProducts);

module.exports = Router;

// // Creating API for getting all products
/*
app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.log(error);
  }
});
*/
