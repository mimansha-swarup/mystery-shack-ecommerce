import { useReducer } from "react";
import { useContext, createContext } from "react";
import axios from "axios";
import { orderReducer } from "../Reducer/orderReducer";
import { useAuth } from "./authContext";

const ordersContext = createContext();

export const useOrders = () => useContext(ordersContext);

export const OrdersProvider = ({ children }) => {
  const [orderState, orderDispatch ] = useReducer(orderReducer, {
    orders: [],
  });

  const { authState } = useAuth();

  const addOrder = async (order) => {
    try {
      const { status, data } = await axios.post(
        "/api/user/orders",
        { ...order },
        { headers: { authorization: authState?.token } }
      );

      if (status === 201) {
        orderDispatch({ type: "SET_ORDERS", payload: data.orders });
        console.log("Order has been placed successfully!");
      }
    } catch (err) {
      console.log("error from addOrder", err);
    }
  };

  return (
    <ordersContext.Provider value={{ orderState, orderDispatch, addOrder }}>
      {children}
    </ordersContext.Provider>
  );
};
