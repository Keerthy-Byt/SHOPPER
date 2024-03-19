import axios from "axios";
import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import { BASE_API_URL } from "../../utils/constants";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    // setImage(e.target.files[0]);
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log("file", file);
    let fileSize = file.size.toString();
    let fileSizeValue = "";

    if (fileSize.length < 7) {
      fileSizeValue = `${Math.round(+fileSize / 1024).toFixed(2)}kb`;
    } else {
      fileSizeValue = `${(Math.round(+fileSize / 1024) / 1000).toFixed(2)}MB`;
    }
    if (fileSizeValue.includes("MB")) {
      return setErrorMsg("Please select file size less than 1MB");
    } else {
      setErrorMsg("");
    }

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      console.log(productDetails);
      // let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append("product", image);
      const { data } = await axios.post(`${BASE_API_URL}/upload`, {
        image,
      });
      console.log("response", data);
      product.image = data.image_url;

      const addproductResponse = await axios.post(
        `${BASE_API_URL}/addproduct`,
        product
      );
      console.log("Add product response:", addproductResponse.data);

      if (addproductResponse.data.success) {
        alert("Product Added");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? image : upload_area}
            className="addproduct-thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
