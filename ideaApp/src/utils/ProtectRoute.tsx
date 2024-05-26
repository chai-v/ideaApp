import { ReactNode, useEffect } from "react";
import { useAuth } from "./UserContext";
import { useNavigate } from 'react-router-dom';

interface Props{
    children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({children}) =>{
    const {user, userlogin, userlogout} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(user===null){
            navigate('/');
        }
    },[navigate, user])

    return <>{children}</>
}

export default ProtectedRoute