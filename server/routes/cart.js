const express = require("express");
const authMiddleware = require("../middlware/authMiddleware");
const { addToCart, removeFromCart, getCart } = require("../controllers/cart");

const Router = express.Router();

Router.post("/addtocart", authMiddleware, addToCart);

//creating endpoint to remove proudct from cartdata

Router.post("/removefromcart", authMiddleware, removeFromCart);

// //creating endpoint to get cartdata

Router.post("/getcart", authMiddleware, getCart);

module.exports = Router;
