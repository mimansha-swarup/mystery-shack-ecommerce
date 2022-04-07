import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useCart, useProducts, useWishList } from "../../Context";
import { DiscountedPrice } from "../../Helper/DIscountedPrice";
import "./SingleProductPage.css";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [currProduct, setCurrProduct] = useState([]);
  const { products } = useProducts();
  const { authState } = useAuth();

  const findProduct = () =>
    products.filter((eachProduct) => eachProduct._id === productId)[0];

  

  const {
    wishListState,
    wishListDispatch,
    SaveToWishList,
    RemoveFromWishList,
  } = useWishList();

  const { cartState, cartDispatch, postCartToServer, deleteProductFromServer } =
    useCart();

  const isPresent = (list, product) =>
    list.filter((prod) => prod._id === product._id).length > 0;

  const [isLiked, setIsLiked] = useState(
    isPresent(wishListState.data, currProduct)
  );
  const [isAddToCart, setIsAddToCart] = useState(
    isPresent(cartState.data, currProduct)
  );

  useEffect(() => {
    setCurrProduct(findProduct());
    setIsAddToCart(isPresent(cartState.data, findProduct()))
    setIsLiked(   isPresent(wishListState.data, findProduct()))
  }, [productId, products]);
  const handleAddToWishlist = (token, product, wishListDispatch) => {
    if (isLiked) RemoveFromWishList(token, product, wishListDispatch);
    else SaveToWishList(token, product, wishListDispatch);

    setIsLiked((prevIsLiked) => (prevIsLiked ? false : true));
  };
  const handleAddToCart = (token, product, cartDispatch) => {
    if (isAddToCart) deleteProductFromServer(token, product, cartDispatch);
    else postCartToServer(token, product, cartDispatch);

    setIsAddToCart((prevIsAddToCart) => (prevIsAddToCart ? false : true));
  };

  return (
    <main className="singleproduct-cont">
      <div className="flex gap-1 center productdetails-box">
        <img
          src={currProduct?.image}
          alt={currProduct?.productName}
          className="img-responsive singleproduct-img"
        />
        <div className="flex flex-column ml-2 mt-1 details ">
          
            <h4 className="headline4 bold mb-0">{currProduct?.company}</h4>
            <h6 className="headline6 regular text-black-01">
              {currProduct?.productName}
            </h6>

            <div>
              <span className="headline3 regular mb-0 mr-1 ">
                {" "}
                ₹{currProduct?.price}
              </span>

              <span
                className="text-black-01 mr-1"
                style={{ textDecoration: "line-through" }}
              >
                ₹{DiscountedPrice(currProduct?.price, currProduct?.discount)}
              </span>
              <span className="text-red-00 ">
                ({currProduct?.discount}%Off)
              </span>
            </div>
          
          <div className="flex flex-column mt-3 gap-1">
            {isAddToCart ? (
              <button
                onClick={() =>
                  handleAddToCart(authState.token, currProduct, cartDispatch)
                }
                className="btn btn-outline purple"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToCart(authState.token, currProduct, cartDispatch)
                }
                className="btn btn-contained purple"
              >
                Add To Cart
              </button>
            )}

            {isLiked ? (
              <button
                onClick={() =>
                  handleAddToWishlist(
                    authState.token,
                    currProduct,
                    wishListDispatch
                  )
                }
                className="btn btn-text teal"
              >
                Remove From Wishlist
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToWishlist(
                    authState.token,
                    currProduct,
                    wishListDispatch
                  )
                }
                className="btn btn-outline teal"
              >
                Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
