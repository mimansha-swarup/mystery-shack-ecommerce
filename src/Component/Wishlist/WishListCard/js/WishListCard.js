import { MdCancel } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { DiscountedPrice } from "../../../../Helper/DIscountedPrice";
import { useAuth, useWishList } from "../../../../Context";
const WishListCard = ({ product }) => {
  const { productName, image, rating, price, discount } = product;
  const { wishListDispatch, RemoveFromWishList } = useWishList();
  const { authState } = useAuth();

  const localRemoveFromWishlist = (token, product, wishListDispatch) =>
    RemoveFromWishList(token, product, wishListDispatch);
  const handleMoveToBag = (token ,product,wishListDispatch) => {
    localRemoveFromWishlist(token ,product,wishListDispatch);
  };

  return (
    <div className="card">
      <div className="media-cont">
        <img className="card-media" src={image} alt="Product" />

        <MdCancel
          className="card-dismiss"
          onClick={() =>
            localRemoveFromWishlist(authState.token, product, wishListDispatch)
          }
        />

        <div className="badge text-badge yellow bottom-left ">
          {rating}
          <AiFillStar />
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <p className="card-title subtitle1 semi-bold mb-1 text-center">
            {productName}
          </p>
        </div>
        <span className="mr-1">₹{price}</span>
        <span
          className="text-black-01 mr-1"
          style={{ textDecoration: "line-through" }}
        >
          {DiscountedPrice(price, discount)}
        </span>
        <span className="text-red-00 small-text">({discount}%Off)</span>
      </div>
      <div className="card-action ">
        <button
          onClick={()=>handleMoveToBag(authState.token, product, wishListDispatch)}
          className="btn btn-outline bold purple"
        >
          MOVE TO BAG
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
