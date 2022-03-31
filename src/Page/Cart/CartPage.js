import { shopNowSVG } from "../../assets";
import { CartCard, CartDetails } from "../../Component";
import { useCart } from "../../Context";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const {cartState} = useCart()
  return (
    <main className="cart-container">
      {
        cartState.data.length>0?(
          <>
          <div className="cart-box">

        {cartState.data.map((product) => (
          <CartCard key={product._id}  product={product} />
          ))}

        <div className="action">
          <button className="btn btn-contained teal">PLACE ORDER</button>
        </div>
      </div>
      <CartDetails />
        
          </>
      ):(
        <div className="flex flex-column center mx-auto mt-3">
          <img class="width-half mb-3 wishList-img" src={shopNowSVG} alt="empty bag"/>
          <h2 className="headline2 text-center">Empty Wishlist</h2>
            <h4 className="headline4 text-center">
              You have no items in your wishlist. Start adding!
            </h4>
            <Link to="/products" >

            <button className="btn btn-contained purple">BROWSE NOW</button>
            </Link>
        </div>
      )
    }
    </main>
  );
};

export default CartPage;
