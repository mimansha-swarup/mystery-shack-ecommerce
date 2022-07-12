import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context";


export function PrivateRoutes() {
  const { authState } = useAuth();
  const location = useLocation();
  
  return authState?.isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}