import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
    const { loged } = useContext(UserContext); 

    return loged? <Outlet/> : <Navigate to="/pleaseLogin" />;
 
}


export default ProtectedRoutes;


