import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/constants";
import Item from "../item/Item";
import "./Popular.css";
const Popular = () => {
  const [data_product, setData_product] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/popularinwomen`)
      .then((response) => {
        setData_product(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
