import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrum from "../components/breadcrum/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
const Product = () => {
  // Destructures 'all_product' from the context provided by ShopContext and assigns it to the variable.
  const { all_product } = useContext(ShopContext);
  // Retrieves the productId from the URL parameters using the useParams hook.
  const { productId } = useParams();
  // Finds the product with the matching productId from the all_product array.
  const product = all_product.find((e) => e.id === Number(productId));
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
