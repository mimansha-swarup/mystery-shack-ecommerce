import { addressActions } from "./contant";

const addressReducer = (state, action) => {
  const {ADD_ADDRESS,SET_DEFAULT} =  addressActions
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, address: action.payload };
    case SET_DEFAULT:
      return { ...state, defaultAddress: action.payload };

    default:
      return state;
  }
};

export { addressReducer };
