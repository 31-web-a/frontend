import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRouter = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
