import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
<<<<<<< HEAD
=======

>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
<<<<<<< HEAD
      <ul className="footer-links">
=======
      <div className="footer-links">
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
<<<<<<< HEAD
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="insta_logo" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="print_logo" />
        </div>
        <div className="footer-icons-container">
=======
      </div>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="insta_logo" />
          <img src={pintester_icon} alt="print_logo" />
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
          <img src={whatsapp_icon} alt="whatsapp_logo" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
