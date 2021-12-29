import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (!loading) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  return null;
};

export default ProtectedRoute;
