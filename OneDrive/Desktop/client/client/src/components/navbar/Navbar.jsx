import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/dropdown_icon.png";
<<<<<<< HEAD
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
=======

const Navbar = () => {
  const [menu, setMenu] = useState("shope");
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
<<<<<<< HEAD
      <div
        className="nav-logo"
        onClick={() => {
          setMenu("shop");
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>SHOPPER</p>
        </Link>
      </div>
      <img
        className="nav-dropdown"
        src={nav_dropdown}
        alt="navbar"
        onClick={dropdown_toggle}
      />
      <ul className="nav-menu" ref={menuRef}>
=======
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />

      <ul ref={menuRef} className="nav-menu">
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
<<<<<<< HEAD
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>{" "}
        </Link>
=======

      <div className="nav-login-cart">
        <button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </button>
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
