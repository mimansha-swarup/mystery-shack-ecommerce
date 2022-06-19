import { ordersActions } from "./contant";

const orderReducer = (state, action) => {
  const { SET_ORDERS } = ordersActions;
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export { orderReducer };
