import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const getToken = () => {
    return sessionStorage.getItem("guestSessionId");
  };
  const token = getToken();
  if (authenticated || token) return <Outlet />;
  return <Navigate to="/" />;
};

export default PrivateRoute;
