import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { UserContext } from "../contexts/UserContext";
// import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { userLoading, user } = useContext(UserContext);

  const location = useLocation();

  if (userLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user && user.id) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
