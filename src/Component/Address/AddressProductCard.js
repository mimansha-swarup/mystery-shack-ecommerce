import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context";
import { DiscountedPrice } from "../../Helper/DIscountedPrice";

export const AddressProductCard = ({ product }) => {
  const { _id, company, productName, image, price, discount } = product;

  const { cartState } = useCart();
  const getQuantity = () =>
    cartState.data.find((prod) => prod._id === _id).quantity;
  return (
    <div className="card  card-horz flex add">
      <div className="flex">
        <Link className="media-cont" to={`/products/${_id}`}>
          <img className="card-media" src={image} alt="productImage" />
        </Link>
        <div className="card-body ">
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

          <div className="flex ">
            <p className="text-black-01 overline semibold">qty</p>
            <p className="text-black-01 overline bold">:</p>
            <p className="text-black-00 mb-0 body1 semibold">{getQuantity()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
