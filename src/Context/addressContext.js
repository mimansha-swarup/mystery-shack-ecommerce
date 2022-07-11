import { useReducer, useContext, createContext, useEffect } from "react";
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
    defaultAddress:{}
  });

  const { authState } = useAuth();

  useEffect(() => {
    if (authState?.token) {
      (async () => {
        try {
          const { status, data } = await axios.get(addressApi, {
            headers: { authorization: authState.token },
          });

          if (status === 200)
            addressDispatch({
              type: addressActions.ADD_ADDRESS,
              payload: data.address,
            });
            addressDispatch({
              type: addressActions.SET_DEFAULT,
              payload: data.address[data.address.length-1],
            });
        } catch (error) {
          console.error("error in fetcing address", error);
        }
      })();
    }
  }, [authState?.token]);

  const addNewAddress = async (address) => {
    try {
     
      const { status, data } = await axios.post(
        addressApi,
        { address },
        { headers: { authorization: authState.token } }
      );

      if (status === 201) {
        addressDispatch({
          type: addressActions.ADD_ADDRESS,
          payload: data.address,
        });
      }
    } catch (err) {
      console.log("error in fetcing address", err);
    }
  };

  const editAddress = async (id, address) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(addressApi, id),
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
    <addressContext.Provider
      value={{
        addressState,
        addressDispatch,
        addNewAddress,
        editAddress,
        deleteAddress,
      }}
    >
      {children}
    </addressContext.Provider>
  );
};
