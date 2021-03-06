
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishList } from "../../../Context";
import { DiscountedPrice } from "../../../Helper/DIscountedPrice";

const CartCard = ({ product }) => {
  const { _id, company, productName, image, price, discount } = product;

  const { authState } = useAuth();
  const {
    cartState,
    cartDispatch,
    deleteProductFromServer,
    alterProductQuantity,
  } = useCart();
  const { SaveToWishList, wishListDispatch } = useWishList();

  const getQuantity = () =>
    cartState.data.find((prod) => prod._id === _id).quantity;

  const handleMoveToWishlist = (
    token,
    product,
    cartDispatch,
    wishListDispatch
  ) => {
    SaveToWishList(token, product, wishListDispatch);
    deleteProductFromServer(token, product, cartDispatch);
  };
  const handleReduction = (token, product, cartDispatch) => {
    if (getQuantity() === 1)
      deleteProductFromServer(token, product, cartDispatch);
    else alterProductQuantity(token, "decrement", product, cartDispatch);
  };

  return (

    <div className="card  card-horz">
      <div className="flex">
        <Link to={`/products/${_id}`} >

        <div className="media-cont">
          <img className="card-media" src={image} alt="productImage" />
        </div>
            </Link>
        <div className="card-body space-between">
          <div className="card-header">
            <p className="card-title subtitle1 bold">{company}</p>
            <p className="card-subtitle subtitle1">{productName}</p>
          </div>
          <div>
            <span className="mr-1">₹{price}</span>
            <span
              className="text-black-01 mr-1"
              style={{ textDecoration: "line-through" }}
              >
              ₹{DiscountedPrice(price, discount)}
            </span>
            <span className="text-red-00 small-text">({discount}%Off)</span>
          </div>
          <div className="flex center quantity">
            <AiFillMinusCircle
              className="quantity-icon"
              onClick={() =>
                handleReduction(
                  authState.token,
                  product,
                  cartDispatch
                )
              }
            />
            <div className="input-group">
              <input
                type="text"
                className="quantity-holder"
                value={getQuantity()}
                readOnly
              />
            </div>
            <AiFillPlusCircle
              className="quantity-icon"
              onClick={() =>
                alterProductQuantity(
                  authState.token,
                  "increment",
                  product,
                  cartDispatch
                )
              }
            />
          </div>
          <div className="card-action flex">
            <button
              onClick={() =>
                handleMoveToWishlist(
                  authState.token,
                  product,
                  cartDispatch,
                  wishListDispatch
                )
              }
              className="btn btn-outline purple semibold"
            >
              MOVE TO WISHLIST
            </button>
            <button
              onClick={() =>
                deleteProductFromServer(authState.token, product, cartDispatch)
              }
              className="btn btn-text purple semibold "
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
