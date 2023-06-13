import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ReactLoading from "react-loading";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();

  if (loading) {
    return (
      <ReactLoading
        className="mx-auto"
        type={"bubbles"}
        color={"#000"}
        height={400}
        width={170}
      />
    );
  }

  if (user && !isAdmin && !isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
