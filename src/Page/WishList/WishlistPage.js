import { wishlistSVG } from "../../assets";
import { WishListCard } from "../../Component";
import { useWishList } from "../../Context";
import { Link } from "react-router-dom";
import "./WishlistPage.css";
const WishlistPage = () => {
  const { wishListState } = useWishList();
  return (
    <main className="wishlist-container ">
      <h3 className="headline3 ">
        Wishlist{" "}
        <span className="grey-text subtitle1">
          ({wishListState.data.length})
        </span>{" "}
      </h3>
      {wishListState.data.length > 0 ? (
        <div className="grid-x4">
          {wishListState.data.map((product) => (
            <WishListCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-column center mb-2">
            <img src={wishlistSVG} className="width-half mb-3 wishList-img" alt="wishlist" />
            <h2 className="headline2 text-center">Empty Wishlist</h2>
            <h4 className="headline4 text-center">
              You have no items in your wishlist. Start adding!
            </h4>
            <Link to="/products" >

            <button className="btn btn-contained purple">BROWSE NOW</button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default WishlistPage;
