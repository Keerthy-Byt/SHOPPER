import Hero from "../components/hero/Hero";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import NewCollections from "../components/newCollection/NewCollections";
import NewsLetter from "../components/newsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
