import { wishListActions } from "./contant";

export const WishlistReduce = (state, action) => {
  switch (action.type) {
    case wishListActions.ADD:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case wishListActions.REMOVE:
      return {
        ...state,
        data: state.data.filter(product=>product.id!==action.payload.id),
      };

    default:
      break;
  }
};
