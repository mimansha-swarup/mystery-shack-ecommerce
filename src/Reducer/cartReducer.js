import { cartActions } from "./contant";

export const cartReducer = (state, action) => {

  switch (action.type) {
    case cartActions.ADD:
      return {
        ...state,
        data: [...state?.data, action.payload],
      };
    case cartActions.REMOVE:
      return {
        ...state,
        data: state.data.filter((product) => product.id !== action.payload.id),
      };
    case cartActions.INCREMENT:
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case cartActions.DECREMENT:
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity:
                  product.quantity > 1
                    ? product.quantity - 1
                    : product.quantity,
              }
            : product
        ),
      };
    case cartActions.RESET:
      return {
        ...state,
        data: [],
      };

    default:
      break;
  }
};
