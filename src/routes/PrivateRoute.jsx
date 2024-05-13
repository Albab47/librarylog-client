import PropTypes from "prop-types"; 
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation()
  console.log(location);

  if(loading) {
    return <Loader loading={loading} size={18} />
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;
};



PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;