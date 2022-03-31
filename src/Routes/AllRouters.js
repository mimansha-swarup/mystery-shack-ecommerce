import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage, LoginPage, ProductsPage, SignupPage, WishlistPage } from "../Page/Index";
import Mockman from "mockman-js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route exact path="/" element={<HomePage />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AllRoutes;
