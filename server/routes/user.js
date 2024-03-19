const express = require("express");
const { addProduct, removeProduct } = require("../controllers/product");
const { signup, login } = require("../controllers/user");

const Router = express.Router();

Router.post("/signup", signup);

//Creating endpoint for user login
Router.post("/login", login);

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
