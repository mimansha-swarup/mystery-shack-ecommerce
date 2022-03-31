import { AuthProvider, useAuth } from "./authContext";
import { CategoriesProvider, useCategories } from "./categoriesContext";
import { FilterProvider, useFilters } from "./filterContext";
import { ProductsProvider, useProducts } from "./productsContext";
import { useWishList, WishlistProvider } from "./wishListContext";


export {
  ProductsProvider,
  useProducts,
  FilterProvider,
  useFilters,
  CategoriesProvider,
  useCategories,
  AuthProvider,
  useAuth,
  WishlistProvider,
  useWishList  
};
