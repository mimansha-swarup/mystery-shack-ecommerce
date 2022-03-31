import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { useAuth, useWishList } from "../../../Context";
import { DiscountedPrice } from "../../../Helper/DIscountedPrice";

const ProductCard = ({ product }) => {
  const { company, productName, image, rating, price, discount } = product; //TODO: Destruct category Later

  const {
    wishListState,
    wishListDispatch,
    SaveToWishList,
    RemoveFromWishList,
  } = useWishList();

  const [isLiked, setIsLiked] = useState(wishListState.data.includes(product));
  const { authState } = useAuth();

  const handleAddToWishlist = (token, product, wishListDispatch) => {
    if (isLiked) {
     
      RemoveFromWishList(token, product, wishListDispatch);
    } else {
      SaveToWishList(token, product, wishListDispatch);
    }
    setIsLiked((prevIsLiked) => (prevIsLiked ? false : true));
  };

  return (
    <div className="card">
      <div className="media-cont">
        <img className="card-media" src={image} alt="Product" />
        {isLiked ? (
          <AiFillHeart
            onClick={() =>
              handleAddToWishlist(authState.token, product, wishListDispatch)
            }
            className="card-dismiss"
          />
        ) : (
          <AiOutlineHeart
            onClick={() =>
              handleAddToWishlist(authState.token, product, wishListDispatch)
            }
            className="card-dismiss"
          />
        )}

        <div className="badge text-badge yellow bottom-left ">
          {rating}
          <AiFillStar />
        </div>
      </div>
      <div className="card-body">
        <div className="card-header">
          <p className="card-title subtitle1 semi-bold">{company}</p>
          <p className="card-subtitle subtitle2">{productName}</p>
        </div>
        <span className="mr-1">₹{price}</span>
        <span
          className="text-black-01 mr-1"
          style={{ textDecoration: "line-through" }}
        >
          ₹{DiscountedPrice(price, discount)}
        </span>
        <span className="text-red-00 small-text">({discount}%Off)</span>
      </div>
      <div className="card-action ">
        <button className="btn btn-contained purple">Buy</button>
      </div>
    </div>
  );
};

export default ProductCard;
