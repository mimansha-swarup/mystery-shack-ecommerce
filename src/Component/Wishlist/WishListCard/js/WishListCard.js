import { MdCancel } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { DiscountedPrice } from "../../../../Helper/DIscountedPrice";
import { useAuth, useCart, useWishList } from "../../../../Context";
import { Link } from "react-router-dom";
const WishListCard = ({ product }) => {
  const { _id,productName, image, rating, price, discount } = product;
  const { wishListState, wishListDispatch, RemoveFromWishList } = useWishList();

  const { authState } = useAuth();
  const { cartState, postCartToServer, cartDispatch, alterProductQuantity } =
    useCart();

  const localRemoveFromWishlist = (token, product, wishListDispatch) =>
    RemoveFromWishList(token, product, wishListDispatch);

  const handleMoveToBag = (token, product, wishListDispatch, cartDispatch) => {
    
    if (cartState.data.filter((prod) => prod._id === product._id).length > 0)
      alterProductQuantity(token, "increment", product, cartDispatch);
    else postCartToServer(token, product, cartDispatch);

    localRemoveFromWishlist(token, product, wishListDispatch);
  };

  return (
    <div className="card">
        <MdCancel
          className="card-dismiss"
          onClick={() =>
            localRemoveFromWishlist(authState.token, product, wishListDispatch)
          }
        />
        <Link to={`/products/${_id}`} >

      <div className="media-cont">
        <img className="card-media" src={image} alt="Product" />


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
        <span className="mr-1 text-black-00">₹{price}</span>
        <span
          className="text-black-01 mr-1"
          style={{ textDecoration: "line-through" }}
          >
          {DiscountedPrice(price, discount)}
        </span>
        <span className="text-red-00 small-text">({discount}%Off)</span>
      </div>
        </Link>
      <div className="card-action ">
        <button
          onClick={() =>
            handleMoveToBag(
              authState.token,
              product,
              wishListDispatch,
              cartDispatch
            )
          }
          className="btn btn-outline bold purple"
        >
          MOVE TO BAG
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
