import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, isLoading } = useContext(AuthContext);

    if(isLoading){
        return <span className="loading text-black text-2xl absolute left-[50%] top-16 loading-infinity loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;