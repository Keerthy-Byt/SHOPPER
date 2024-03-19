import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_API_URL } from "../utils/constants";

// Creates a context object for sharing data with components, initialized with a default value of null.
export const ShopContext = createContext(null);

//empty card
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
// Functional component to provide context value to child components
const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  // start with empty card
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/allproducts`)
      .then((response) => {
        setAll_Product(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all products:", error);
      });

    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          `${BASE_API_URL}/getcart`,
          {},
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setCartItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          `${BASE_API_URL}/addtocart`,
          { itemId: itemId },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          `${BASE_API_URL}/removefromcart`,
          { itemId: itemId },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error removing item from cart:", error);
        });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Define context value containing all important functons and data
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalCartAmount,
  };
  // Render the ShopContext.Provider with context value and child components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
