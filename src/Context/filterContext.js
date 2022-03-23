import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/FilterReducer";

const filterContext   = createContext({})

export const useFilters = ()=> useContext(filterContext)

export const FilterProvider = ({children}) => {
  const [filterState,filterDispatch] = useReducer(filterReducer,{
    sortBy: null,
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    maxPrice: 1000,
    rating: 5,
    searchQuery: "",
    category:[],
  })
  return <filterContext.Provider value={{filterState,filterDispatch}} >{children}</filterContext.Provider>
}