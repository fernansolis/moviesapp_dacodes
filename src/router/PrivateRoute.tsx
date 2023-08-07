import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const getToken = () => {
    return sessionStorage.getItem("guestSessionId");
  };
  const token = getToken();
  if (token) return <Outlet />;
  return <Navigate to="/" />;
};

export default PrivateRoute;
