import { Routes, Route, Navigate } from "react-router-dom";
import {
  AddressPage,
  CartPage,
  CheckoutPage,
  Error404Page,
  HomePage,
  LoginPage,
  OrderPage,
  ProductsPage,
  ProfilePage,
  SignupPage,
  SingleProductPage,
  WishlistPage,
} from "../Page/Index";
import { PrivateRoutes } from "./PrivateRouting";
import { useAuth } from "../Context";

const AllRoutes = () => {
  const { authState } = useAuth();

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route exact path="/" element={<HomePage />} />
      <Route path="*" element={<Error404Page />} />

      {authState?.isAuth ? (
        <>
          <Route path="/login" element={<Navigate replace to="/" />}></Route>
          <Route path="/signin" element={<Navigate replace to="/" />}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignupPage />} />
        </>
      )}
    </Routes>
  );
};

export default AllRoutes;
