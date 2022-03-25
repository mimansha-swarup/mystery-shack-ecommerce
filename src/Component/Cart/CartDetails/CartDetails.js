const CartDetails = () => {
  return (
    <div class="card cartdetails-card">
      <div className="flex center">
        <h4 class="headline4 regular mb-0 text-black-01"> PRICE DETAILS</h4>
      </div>
      <hr class="line-horz" />
      <div class="flex space-between mb-1 mt-1">
        <span class="subtitle1">Price</span>
        <span class="subtitle1">Rs 2000</span>
      </div>
      <div class="flex space-between mb-1">
        <span class="subtitle1">Discount</span>
        <span class="subtitle1 text-green-00">- Rs 500</span>
      </div>
      <div class="flex space-between mb-1">
        <span class="subtitle1">Delivery Charges</span>
        <span class="subtitle1">+ Rs 200</span>
      </div>
      <hr class="line-horz" />
      <div class="flex space-between mb-1 mt-1">
        <span class="subtitle1 bold">Total Amount</span>
        <span class="subtitle1 bold">Rs 1700</span>
      </div>
      <hr class="line-horz" />
      <p class="body1 mt-2">You will save Rs 300 onthis order</p>
    </div>
  );
};

export default CartDetails;
