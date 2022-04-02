import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
import { productsApi } from "../Helper/Api/api";
import { useAuth } from "./authContext";

const productsContext = createContext();

export const useProducts = () => useContext(productsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const {authState} =useAuth()

  useEffect(() => {
    if(authState?.token){

      
      (async () => {
        setStatus({ isLoading: true, error: "" });
        const response = await axios.get(productsApi);
        if (response.status === 200) {
          setProducts(response.data.products);
          setStatus({ isLoading: false, error: "" });
        }
        try {
        } catch (error) {
          setStatus({ isLoading: false, error: error.message });
        }
      })();
    }
    }, [authState?.token]);

  return (
    <productsContext.Provider value={{ products, status }}>
      {children}
    </productsContext.Provider>
  );
};
