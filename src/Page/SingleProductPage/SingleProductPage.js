import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth, useCart, useProducts, useToast, useWishList } from "../../Context";
import { DiscountedPrice } from "../../Helper/DIscountedPrice";
import "./SingleProductPage.css";
import { Specification } from "../../Component";

const SingleProductPage = () => {
  const { productId } = useParams();
  const [currProduct, setCurrProduct] = useState([]);
  const { products } = useProducts();
  const { authState } = useAuth();
  const {setToastData} = useToast()

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

  const isPresent = (list=[], product) =>
    list.filter((prod) => prod._id === product._id).length > 0;

  const [isLiked, setIsLiked] = useState(
    isPresent(wishListState?.data, currProduct)
  );
  const [isAddToCart, setIsAddToCart] = useState(
    isPresent(cartState?.data, currProduct)
  );

  useEffect(() => {
    setCurrProduct(findProduct());
    setIsAddToCart(isPresent(cartState?.data, findProduct()));
    setIsLiked(isPresent(wishListState?.data, findProduct()));
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

      <div className="grid-images ml-1 mr-1">
        <img
          src={currProduct?.image}
          alt={currProduct?.productName}
          className="img-responsive singleproduct-img mx-auto"
        />
        {currProduct?.moreImages &&
          currProduct?.moreImages.map((imgPath) => (
            <img
            key={imgPath}
              src={imgPath}
              alt={currProduct?.productName}
              className="img-responsive singleproduct-img"
            />
          ))}
      </div>
      <div className="flex flex-column  mt-1 details ">
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
          <span className="text-red-00 semibold ">
            ({currProduct?.discount}%Off)
          </span>
        </div>
        <p className="caption text-green-01 regular">inclusive of all taxes</p>
        {/* TODO: to implement */}
        {/* <p className="headline4  mb-1">Sizes</p>
        <div className="flex gap-1">
          <input type="radio" name="size" className="size-input" id="sm" />
          <label htmlFor="sm" className="sizes flex center">
            S
          </label>

          <input type="radio" name="size" className="size-input" id="MD" />
          <label htmlFor="MD" className="sizes flex center">
            M
          </label>

          <input type="radio" name="size" className="size-input" id="lg" />
          <label htmlFor="lg" className="sizes flex center">
            L
          </label>

          <input type="radio" name="size" className="size-input" id="xl" />
          <label htmlFor="xl" className="sizes flex center">
            XL
          </label>

          <input type="radio" name="size" className="size-input" id="xxl" />
          <label htmlFor="xxl" className="sizes flex center">
            XXL
          </label>
        </div> */}
        <hr className="line-horz" />

        <div className="flex mb-2  gap-1">
          {isAddToCart ? (
            <Link  className="btn btn-outline purple " to="/cart" >
            <button
              className="inherit "
              >
              Go to Bag
            </button>
              </Link>
          ) : (
            <button
              onClick={() =>{
                handleAddToCart(authState.token, currProduct, cartDispatch)
                setToastData(prevToastData=>[...prevToastData,{type:"success",message:"Added to Bag!"}])
              }
              }
              className="btn btn-contained purple "
            >
              Add To Bag
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
              className="btn bg-teal-04 "
            >
              Wishlisted
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
              className="btn btn-outline teal "
            >
              Wishlist
            </button>
          )}
        </div>
        
        <Specification currProduct={currProduct} />
      </div>
     
    </main>
  );
};

export default SingleProductPage;
