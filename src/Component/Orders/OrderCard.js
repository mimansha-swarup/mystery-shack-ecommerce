import React from "react";

export const OrderCard = ({ orderData }) => {

  const {orderId,orderedAt,deliveryAddress,orderedProducts,amountPaid} = orderData
  return (
    <div className="card">
      <div className="order-header">
        <p className="small-text text-black-01">
          <span className="semibold">Order ID: </span>
          {orderId}
        </p>
        <p className="small-text text-green-02 mb-0">
          <span className="semibold">Ordered At: </span>
          {orderedAt}
        </p>
      </div>
      <address className="address-holder">
        <p className="body2 mb-0 mt-0">
          <span className="bold text-green-03">Delivered to : </span>
          <span className="text-black-00">
            {deliveryAddress.name}, {deliveryAddress.zipCode},{" "}
            {deliveryAddress.street},{" "}
            {`${deliveryAddress.state},${deliveryAddress.country} `}
          </span>
        </p>
      </address>
      {
        orderedProducts.map(
          order=>
      <div key={order._id} className="card  card-horz">
        <div className="flex">
          <div className="media-cont">
            <img
              className="card-media"
              src={order.image}
              alt="productImage"
            />
          </div>

          <div className="card-body ">
            <div className="card-header">
              <p className="card-title subtitle1 bold">{order.productName}</p>
              <p className="card-subtitle subtitle1">{order.company}</p>
            </div>
          </div>
        <p className="body1 semibold">₹{order.price}</p>
         
        </div>
      </div>
        )
      }
      <div className="flex">

      <p className="body1 text-green-02 semibold ml-auto mr-1">₹{amountPaid}</p>
      </div>

    </div>
  );
};
