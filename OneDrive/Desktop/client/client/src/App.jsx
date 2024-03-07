import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";
<<<<<<< HEAD
=======

>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_banner} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kids_banner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
<<<<<<< HEAD
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
=======
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
