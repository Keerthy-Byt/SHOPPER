import { useContext } from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
=======
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
import Breadcrum from "../components/breadcrum/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
<<<<<<< HEAD
const Product = () => {
  // Destructures 'all_product' from the context provided by ShopContext and assigns it to the variable.
  const { all_product } = useContext(ShopContext);
  // Retrieves the productId from the URL parameters using the useParams hook.
  const { productId } = useParams();
  // Finds the product with the matching productId from the all_product array.
  const product = all_product.find((e) => e.id === Number(productId));
=======

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

>>>>>>> 345facb1668d94ddf2a69c17eb686d0f566176ee
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
