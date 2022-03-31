import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { cartApi } from "../Helper/Api/api";
import { cartReducer } from "../Reducer/cartReducer";
import { cartActions } from "../Reducer/contant";
import { useAuth } from "./authContext";
const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const  [cartList,setCartList] = useState([])
  const {authState} = useAuth()
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(cartApi, {
          headers: { authorization: authState.token },
        });
  
        if (response.status === 200) setCartList(response.data.cart);
      } catch (error) {
        console.log("error in fetcing useState",error.message)
      }
    })();
  }, []);

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
      console.log("error from cart\n", error.message);
    }
  };
  const deleteProductFromServer = async (token, product, cartDispatch) => {
    try {
      const response = await axios.delete(
        cartApi + "/" + String(product._id),

        { headers: { authorization: token } }
      );
      if (response.status === 200) {
        cartDispatch({
          type: cartActions.REMOVE,
          payload: product,
        });
      }
    } catch (error) {
      console.log("error from cart\n", error.message);
    }
  };

  const alterProductQuantity = async (token, type, product, cartDispatch) => {
    try {
      const response = await axios.post(
        cartApi + "/" + String(product._id),
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
      console.log(response)
      if (response.status === 200) {
        cartDispatch({ type: cartActions[type.toUpperCase()],payload:product });
      }
    } catch (error) {
      
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
