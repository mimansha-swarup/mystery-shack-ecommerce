import { WishListCard } from "../../Component";
import "./WishlistPage.css";
const WishlistPage = () => {
  return (
    <main className="wishlist-container ">
      <h3 className="headline3 ">
        Wishlist <span className="grey-text subtitle1">(4items)</span>{" "}
      </h3>
      <div className="grid-x4">
        {
          [...Array(10)].map(el=>(<WishListCard/>))
        }
        
      </div>
    </main>
  );
};

export default WishlistPage;
