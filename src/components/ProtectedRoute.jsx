import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
