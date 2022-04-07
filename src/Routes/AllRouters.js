import { Routes, Route, Navigate } from "react-router-dom";
import {
  CartPage,
  Error404Page,
  HomePage,
  LoginPage,
  ProductsPage,
  SignupPage,
  SingleProductPage,
  WishlistPage,
} from "../Page/Index";
import PrivateRoutes from "./PrivateRouting";
import { useAuth } from "../Context";

const AllRoutes = () => {
  const {authState} = useAuth()


  return (
    <Routes>
      <Route
        path="/products"
        element={<ProductsPage />} 
      />
      <Route
        path="/products/:productId"
        element={<SingleProductPage />} 
      />
      <Route
        path="/wishlist"
        element={<WishlistPage />}
      />
      <Route path="/cart" element={<CartPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<Error404Page />} />
      
      {
        authState?.isAuth ?(
          <>
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/signup" element={<Navigate to="/" replace />} />
          </>
        ):(
          <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
          </>
        )

      }
    </Routes>
  );
};

export default AllRoutes;
