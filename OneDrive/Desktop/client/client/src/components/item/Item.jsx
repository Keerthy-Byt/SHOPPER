<<<<<<< HEAD
import "./Item.css";
import { Link } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import "./Item.css";
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
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
