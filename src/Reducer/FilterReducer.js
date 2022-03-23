import { filterActions } from "./contant";

export const filterReducer = (state, action) => {
  const {
    SORT,
    SET_RATING,
    SET_PRICE_RANGE,
    TOGGLE_OUT_OF_STOCK,
    SET_CATEGORY,
    SET_SEARCH_QUERY,
    CLEAR,
  } = filterActions;
  switch (action.type) {
    case SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
    case TOGGLE_OUT_OF_STOCK:
      return {
        ...state,
        showInventoryAll: !state.showInventoryAll,
      };
    case SET_PRICE_RANGE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_CATEGORY:
      if (state.category.includes(action.payload)) {
        return {
          ...state,
          category: state.category.filter(
            (eachCategory) => (eachCategory !== action.payload)
          ),
        };
      } else {
        return {
          ...state,
          category: [...state.category, action.payload],
        };
      }
    case CLEAR:
      console.log("clear is working") 
      
      return {
        sortBy: null,
        showInventoryAll: true,
        showFastDeliveryOnly: false,
        maxPrice: 1000,
        rating: 5,
        searchQuery: "",
        category: [],
      };
      
      default:
      console.log("clear deafaukt is working") 
      break;
  }
};
