import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // const server = "https://shopperkk.onrender.com/";
  // const imgName = props.image.split("images/")[1];
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          // src={`${server}images/${imgName}`}
          alt={props.name}
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-now">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
