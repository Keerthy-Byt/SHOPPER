import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";
<<<<<<< HEAD
=======

>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
