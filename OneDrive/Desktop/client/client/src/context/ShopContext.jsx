import { createContext, useState } from "react";
import all_product from "../components/assets/all_product";
<<<<<<< HEAD

// Creates a context object for sharing data with components, initialized with a default value of null.
=======
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
export const ShopContext = createContext(null);

//empty card
const getDefaultCart = () => {
  let cart = {};
<<<<<<< HEAD
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
// Functional component to provide context value to child components
const ShopContextProvider = (props) => {
  // start with empty card
=======
  all_product.forEach((item, index) => {
    cart[index + 1] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
<<<<<<< HEAD
  };

=======
    console.log(cartItems);
  };
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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

<<<<<<< HEAD
  // Define context value containing all important functons and data
  const contextValue = {
=======
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
<<<<<<< HEAD
    getTotalCartItems,
    getTotalCartAmount,
  };
  // Render the ShopContext.Provider with context value and child components
=======
  };

>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
