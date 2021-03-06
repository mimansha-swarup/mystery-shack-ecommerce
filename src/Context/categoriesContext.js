import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
import { categoriesApi } from "../Helper/Api/api";

const categoriesContext = createContext([]);

export const useCategories = () => useContext(categoriesContext);



export const CategoriesProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, error: "" });

  useEffect(() => {
    (async () => {
      setStatus({ isLoading: true, error: "" });
      const response = await axios.get(categoriesApi);
      if (response.status === 200) {
        setCategoriesData(response.data.categories);
        setStatus({ isLoading: false, error: "" });
      }
      try {
      } catch (error) {
        console.error(error)
        setStatus({ isLoading: false, error: error.message });
      }
    })();
  }, []);
  return (
    <categoriesContext.Provider value={{ categoriesData, status }}>
      {children}
    </categoriesContext.Provider>
  );
};
