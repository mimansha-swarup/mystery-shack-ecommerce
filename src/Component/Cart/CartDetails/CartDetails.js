import { useCart } from "../../../Context";
import { cartTotalDiscount, cartTotalPrice } from "../../../Helper/CartFunction";
import { DiscountedPrice } from "../../../Helper/DIscountedPrice";

const CartDetails = () => {
  const {cartState} = useCart()
  const deliveryFees = 100
  const cartValue = cartTotalPrice(cartState.data)
  const cartDiscount = cartTotalDiscount(cartState.data)
  const cartValueWithoutDiscount = DiscountedPrice(cartValue, cartDiscount)
  const cartDiscountedPrice =  DiscountedPrice(cartValue, cartDiscount) - cartValue
  const total = deliveryFees+cartValue
  
  return (
    <div class="card cartdetails-card">
      <div className="flex center">
        <h4 class="headline4 regular mb-0 text-black-01"> PRICE DETAILS</h4>
      </div>
      <hr class="line-horz" />
      <div class="flex space-between mb-1 mt-1">
        <span class="subtitle1">Price</span>
        <span class="subtitle1">₹{cartValueWithoutDiscount}</span>
      </div>
      <div class="flex space-between mb-1">
        <span class="subtitle1">Discount</span>
        <span class="subtitle1 text-green-00">- ₹{cartDiscountedPrice}</span>
      </div>
      <div class="flex space-between mb-1">
        <span class="subtitle1">Delivery Charges</span>
        <span class="subtitle1">+ ₹{deliveryFees}</span>
      </div>
      <hr class="line-horz" />
      <div class="flex space-between mb-1 mt-1">
        <span class="subtitle1 bold">Total Amount</span>
        <span class="subtitle1 bold">₹{total}</span>
      </div>
      <hr class="line-horz" />
      <p class="body1 mt-2">You will save ₹{cartValueWithoutDiscount-total} on this order</p>
    </div>
  );
};

export default CartDetails;
