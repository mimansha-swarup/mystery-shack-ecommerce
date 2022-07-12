import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartApi, concatedApi } from "../Helper/Api/api";
import { cartReducer } from "../Reducer/cartReducer";
import { cartActions } from "../Reducer/contant";
import { useAuth } from "./authContext";
import { useToast } from "./toastContext";
const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const { authState } = useAuth();
  const { setToastData } = useToast();
  useEffect(() => {
    if (authState?.token) {
      (async () => {
        try {
          const response = await axios.get(cartApi, {
            headers: { authorization: authState.token },
          });

          if (response.status === 200) setCartList(response.data.cart);
        } catch (error) {
          setToastData((prevToastData) => [
            ...prevToastData,
            { type: "error", message: error.message },
          ]);
          console.error("error in fetcing useState", error);
        }
      })();
    }
  }, [authState?.token, setToastData]);

  const [cartState, cartDispatch] = useReducer(cartReducer, { data: cartList });

  const postCartToServer = async (token, product, cartDispatch) => {
    try {
      const response = await axios.post(
        cartApi,
        { product },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        cartDispatch({
          type: cartActions.ADD,
          payload: { ...product, quantity: 1 },
        });
      }
    } catch (error) {
      console.error("error from cart\n", error);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const deleteProductFromServer = async (token, product, cartDispatch) => {
    try {
      const response = await axios.delete(
        concatedApi(cartApi, String(product._id)),
        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        cartDispatch({
          type: cartActions.REMOVE,
          payload: product,
        });
      }
    } catch (error) {
      console.error("error from cart\n", error.message);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };

  const alterProductQuantity = async (token, type, product, cartDispatch) => {
    try {
      const response = await axios.post(
        concatedApi(cartApi, String(product._id)),
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        cartDispatch({
          type: cartActions[type.toUpperCase()],
          payload: product,
        });
      }
    } catch (error) {
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const clearCart = async () => {
    try {
      const { status } = await axios.post(
        concatedApi(cartApi, "clearCart"),
        {},
        { headers: { authorization: authState?.token } }
      );

      if (status === 201) {
        cartDispatch({ type: cartActions.RESET, });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <cartContext.Provider
      value={{
        cartState,
        cartDispatch,
        postCartToServer,
        deleteProductFromServer,
        alterProductQuantity,
        clearCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
