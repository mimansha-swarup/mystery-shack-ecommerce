import { addressActions } from "./contant";

const addressReducer = (state, action) => {
  const {ADD_ADDRESS} =  addressActions
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};

export { addressReducer };
