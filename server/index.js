const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//const multer = require("multer");
const path = require("path"); // to get access to the backend directory in the express app
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");
require("./config");

const port = process.env.PORT || 4000;
//const port = process.env.PORT || 4000;
require("dotenv").config();
// to parse whatever request i get from response will automatically  through json
app.use(express.json());
// to connect the project to the express app on port
app.use(cors());

//app.use("/api/products", productRoutes);
app.use(productRoutes);
app.use(userRoutes);
app.use(cartRoutes);

// Database Connection With MongoDB
mongoose.connect(process.env.MONGODB_URL);
// API Creation

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

//Creating Upload Endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", async (req, res) => {
  try {
    console.log("filename", req.body);
    const response = await cloudinary.uploader.upload(req.body.image, {
      folder: "images",
    });
    console.log("response", response);
    return res.send({
      success: 1,
      image_url: response.secure_url,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server Running on Port " + port);
});
