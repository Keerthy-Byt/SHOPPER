const Users = require("../models/user");

const addToCart = async (req, res) => {
  try {
    console.log("Added", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Added");
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
};

const removeFromCart = async (req, res) => {
  try {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
      userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Removed");
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const getCart = async (req, res) => {
  try {
    console.log("GetCart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = { addToCart, removeFromCart, getCart };
