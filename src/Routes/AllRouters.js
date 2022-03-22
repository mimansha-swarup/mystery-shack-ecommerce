import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsPage } from "../Page/Index";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
