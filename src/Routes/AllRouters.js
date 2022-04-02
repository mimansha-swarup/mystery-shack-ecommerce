import { Routes, Route, Navigate } from "react-router-dom";
import {
  CartPage,
  Error404Page,
  HomePage,
  LoginPage,
  ProductsPage,
  SignupPage,
  WishlistPage,
} from "../Page/Index";
import Mockman from "mockman-js";
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
        path="/wishlist"
        element={<WishlistPage />}
      />
      <Route path="/cart" element={<CartPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<Error404Page />} />
      <Route
        path="/mockman"
        element={<Mockman />}
      />
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
