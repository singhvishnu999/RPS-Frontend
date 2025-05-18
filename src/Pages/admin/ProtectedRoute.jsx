import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../store/Auth";

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthProvider);

    const navigate = useNavigate();

    useEffect(()=>{
        if(user === null){
            navigate("/");
        }
    },[]);

    return (
        <>
        {children}
        </>
    )
};
export default ProtectedRoute;