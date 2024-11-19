import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const { user, isLoading } = useContext(AuthContext);

    if(isLoading){
        return <span className="loading text-black text-2xl absolute left-[50%] top-16 md:top-[200px] loading-infinity loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;