import { Navigate } from "react-router-dom";
import { useAuth } from "../Context";

const PrivateRoutes = ({ element: Element }) => {
  const { authState } = useAuth();
  const { isAuth } = authState;
  return isAuth ? <Element /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
