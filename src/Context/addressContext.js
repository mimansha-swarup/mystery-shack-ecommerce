import { useReducer, useContext, createContext } from "react";
import axios from "axios";

import { addressReducer } from "../Reducer/addressReducer";
import { useAuth } from "./authContext";
import { addressApi, concatedApi } from "../Helper/Api/api";
import { addressActions } from "../Reducer/contant";

const addressContext = createContext();

export const useAddress = () => useContext(addressContext);

export const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    address: [],
  });

  const { authState } = useAuth();

  const addNewAddress = async (address) => {
    try {
      const { status, data } = await axios.post(
        addressApi,
        { address },
        { headers: { authorization: authState?.token } }
      );

      if (status === 201) {
        addressDispatch({
          type: addressActions.ADD_ADDRESS,
          payload: data.address,
        });
      }
    } catch (err) {
      console.error("error in fetcing address", err);
    }
  };

  const editAddress = async (address) => {

    try {
      const { status, data } = await axios.post(
        concatedApi(addressApi, address._id),
        { address },
        { headers: { authorization: authState?.token } }
      );
 
      if (status === 200) {
        addressDispatch({
          type: addressActions.ADD_ADDRESS,
          payload: data.address,
        });
      }
    } catch (err) {
      console.error(
        "error in editing address",
        err,
        err.response.data[0].errors
      );
    }
  };

  const deleteAddress = async (address) => {
    try {
      const { status, data } = await axios.delete(
        concatedApi(addressApi, address._id),
        { headers: { authorization: authState?.token } }
      );

      if (status === 200) {
        addressDispatch({
          type: addressActions.ADD_ADDRESS,
          payload: data.address,
        });
      }
    } catch (err) {
      console.error("error in deleting address", err);
    }
  };

  return (
    <addressContext.Provider value={{ addressState, addressDispatch, addNewAddress, editAddress, deleteAddress }}>
      {children}
    </addressContext.Provider>
  );
};