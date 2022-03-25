import { CartCard, CartDetails } from "../../Component";
import "./CartPage.css";

const CartPage = () => {
  return (
    <main className="cart-container">
      <div className="cart-box">
        {[...Array(3)].map((el) => (
          <CartCard />
        ))}

        <div className="action">
          <button className="btn btn-contained teal">PLACE ORDER</button>
        </div>
      </div>
      <CartDetails />
    </main>
  );
};

export default CartPage;
