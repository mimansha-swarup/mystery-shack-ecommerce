import { useCart } from "../../../Context";
import {
  cartOrignalValue,
  cartTotalDiscount,
  cartTotalPrice,
} from "../../../Helper/CartFunction";

const CartDetails = () => {
  const { cartState } = useCart();
  const deliveryFees = 100;
  const cartValue = cartTotalPrice(cartState.data);
  const cartValueWithoutDiscount = cartOrignalValue(cartState.data);
  const cartDiscountedPrice =
  cartValueWithoutDiscount - cartValue;
  const total = deliveryFees + cartValue;

  return (
    <div className="card cartdetails-card">
      <h6 className="headline6 regular mb-0 text-black-00"> PRICE DETAILS</h6>

      <hr className="line-horz" />
      <div className="flex flex-column gap-2 text-black-00">
        <div className="flex space-between ">
          <span className="subtitle1">Price</span>
          <span className="subtitle1">₹{cartValueWithoutDiscount}</span>
        </div>
        <div className="flex space-between">
          <span className="subtitle1">Discount</span>
          <span className="subtitle1 text-green-00">- ₹{cartDiscountedPrice}</span>
        </div>
        <div className="flex space-between">
          <span className="subtitle1">Delivery Charges</span>
          <span className="subtitle1">+ ₹{deliveryFees}</span>
        </div>
      </div>
      <hr className="line-horz" />
      <div className="flex space-between space">
        <span className="subtitle1 bold">Total Amount</span>
        <span className="subtitle1 bold">₹{total}</span>
      </div>
      <hr className="line-horz" />
      <p className="body1 ">
        You will save ₹{cartValueWithoutDiscount - total} on this order
      </p>
    </div>
  );
};

export default CartDetails;
