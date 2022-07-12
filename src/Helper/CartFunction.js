import { DiscountedPrice } from "./DIscountedPrice";

export const cartTotalPrice = (cartList) =>
  cartList.reduce((sum, product) => sum + product.price * product.quantity, 0);

export const cartTotalDiscount = (cartList) =>
  cartList.reduce(
    (sum, product) => sum + product.discount * product.quantity,
    0
  );

export const cartOrignalValue = (cartList) =>
  cartList.reduce(
    (sum, product) =>
      sum + DiscountedPrice(product.price, product.discount) * product.quantity,
    0
  );
