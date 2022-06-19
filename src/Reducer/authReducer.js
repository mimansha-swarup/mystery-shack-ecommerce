import { authActions } from "./contant";

export const authReducer = (state, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state,
        token: action.payload.token,
        isAuth: action.payload.isAuth,
        customer: action.payload.customer,
      };
    case authActions.LOGOUT:
      return {
        ...state,
        token: "",
        isAuth: false,
        customer:{}
      };

    default:
      break;
  }
};
