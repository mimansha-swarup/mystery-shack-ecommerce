import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


const CartCard = () => {
  const [quantity,setQuantity] = useState(1)
  const handleIncrementQuantity = () =>setQuantity(prevQuantity=>prevQuantity+1)
  const handleDecrementQuantity = () =>setQuantity(prevQuantity=>prevQuantity>1? prevQuantity-1:prevQuantity)
  return ( <div class="card  card-horz">
  <div class="flex">
    <div class="media-cont">
      <img
        class="card-media"
        src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16848524/2022/1/17/e069c40e-3751-4769-a974-3144872506a31642420811824KALINIWomenBlack1.jpg"
        alt="productImage"
      />
    </div>
    <div class="card-body space-between">
      <div class="card-header">
        <p class="card-title subtitle1 bold">Nike Shoes</p>
        <p class="card-subtitle subtitle1">by Nike Intl</p>
      </div>
      <div>
        <span className="mr-1">₹{400}</span>
        <span
          className="text-black-01 mr-1"
          style={{ textDecoration: "line-through" }}
        >
          ₹{600}
        </span>
        <span className="text-red-00 small-text">({20}%Off)</span>
      </div>
      <div className="flex center quantity" >
        <AiFillPlusCircle className="quantity-icon" onClick={handleIncrementQuantity} />
        <div className="input-group"  >
          <input type="text" className="quantity-holder" value={quantity} />
        </div>
        <AiFillMinusCircle className="quantity-icon" onClick={handleDecrementQuantity}  />

      </div>
      <div class="card-action flex">
        <button class="btn btn-outline purple semibold">
          MOVE TO WISHLIST
        </button>
        <button class="btn btn-text purple semibold ">REMOVE</button>
      </div>
    </div>
  </div>
</div> );
}
 
export default CartCard;