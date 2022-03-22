import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Page/Index";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
